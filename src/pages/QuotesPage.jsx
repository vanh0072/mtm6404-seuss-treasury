// QuotesPage.jsx
import { useEffect, useState } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')  // Correct endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log the data to inspect
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <p>{quote.text}</p>  {/* Render only the text of the quote */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;
