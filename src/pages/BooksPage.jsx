// BooksPage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log the data to inspect
        setBooks(data);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img
                src={book.image || 'https://via.placeholder.com/200'}  // Corrected field name
                alt={book.title}
                style={{ width: '200px', height: 'auto' }}
              />
              <h2>{book.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
