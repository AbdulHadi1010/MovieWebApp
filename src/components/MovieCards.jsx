import React from "react";

export default function MovieCards({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/w300`;
  return (
    <div>
      <img src={ImgLink + props.poster_path} alt="Poster" />
      <div>{props.original_title}</div>
      <div>{props.overview}</div>
    </div>
  );
}
