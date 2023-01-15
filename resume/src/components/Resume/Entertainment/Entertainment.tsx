import React, { useContext } from 'react';
import { Movie } from '../Movie/Movie';
import { Book } from '../Book/Book';
import { Song } from '../Song/Song';
import { ResumeContext } from '../../../context';



export const Entertainment: React.FC = () => {
  const context = useContext(ResumeContext)
  const data = context.entertainmentData;
  return (
    <>
      <h2>Favourite Movies</h2>
      <ul>
        {data.favoriteMovies?.map((movie, index) => (
          <li key={index}>
            <Movie data={movie} />
          </li>
        ))}
      </ul>
      <h2>Favourite Books</h2>
      <ul>
        {data.favoriteBooks?.map((book, index) => (
          <li key={index}>
            <Book data={book} />
          </li>
        ))}
      </ul>
      <h2>Favourite Songs</h2>
      <ul>
        {data.favoriteSongs?.map((song, index) => (
          <li key={index}>
            <Song data={song} />
          </li>
        ))}
      </ul>
    </>
  );
};
