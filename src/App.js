import "./App.css";
import React from "react";
import CommentBox from "./container/CommentBox";

function App() {
  return (
    <div className="appContainer">
      <CommentBox />

      <form method="get" action="https://www.imdb.com/calendar/?region=gb">
        <button type="submit">View More Upcoming Releases &gt;&gt; </button>
      </form>
    </div>
  );
}

export default App;
