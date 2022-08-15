import { useState } from "react";
import "./App.css";


function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookPages, setBookPage] = useState("");
  const [bookPublish, setBookPublish] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    console.log({bookTitle, bookPages, bookPublish})
  }

  
  return (
    <div className="App">
      <h1>홈페이지지지지</h1>
      <form>

        <div>
        <label htmlFor="book-title">제목</label>
        <input type="text" name="name" id="book-title" 
        value={bookTitle} placeholder="제목" onChange={(e) => setBookTitle(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="book-pages">페이지 수</label>
        <input type="number" name="pages" id="book-pages" 
        value={bookPages} placeholder="제목" onChange={(e) => setBookPage(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="book-publish-bate">출판일</label>
        <input type="date" name="publish" id="publish" 
        value={bookPublish} placeholder="제목" onChange={(e) => setBookPublish(e.target.value)}/>
        </div>
        <button onClick={handleBook} type="submit">저장하기</button>

      </form>
    </div>
  );
}

export default App;
