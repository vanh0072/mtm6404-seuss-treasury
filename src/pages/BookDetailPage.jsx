import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <div className="image-container">
        <img
          src={book.image || 'https://via.placeholder.com/200'} // Fallback image
          alt={book.title}
        />
      </div>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetailPage;
