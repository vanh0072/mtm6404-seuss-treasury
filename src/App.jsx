import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import QuotesPage from './pages/QuotesPage.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/books">Books</a>
          <a href="/quotes">Quotes</a>
        </nav>
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;