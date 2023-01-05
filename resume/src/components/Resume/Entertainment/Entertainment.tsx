import React from 'react';
import { EntertainmentInterface } from '../../../interfaces';
import { Movie } from '../Movie/Movie';
import { Book } from '../Book/Book';
import { Song } from '../Song/Song';


interface Props {
  data: EntertainmentInterface;
}

export const Entertainment: React.FC<Props> = (props) => {
  const { data } = props;
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
