import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => {
    return (
      // <Comment author={comment.author}>{comment.text}</Comment>
      <Film name={film.name} url={film.url} />
    );
  });
  return <ul>{filmNodes}</ul>;
};

export default FilmList;
