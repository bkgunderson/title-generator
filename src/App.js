import { useState, useEffect, useCallback } from "react";

import GenerateBook from "./components/GenerateBook";

function App() {
  let [bookList, setBookList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <h1>Let's Make A Book Title</h1>
      {/* onSendBook is sort of like a push, yeah? */}
      <GenerateBook
        onSendBook={(newBook) => setBookList([...bookList, newBook])}
        lastId={bookList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <ul>
        {bookList.map((book) => (
          <li key={`book-${bookList.indexOf(book)}`}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
