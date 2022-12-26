// Create a component that will render the entertainement section of the resume and import it into the Resume component.
// This component will list the following commponent into the related section : Movie, Book, Song

import React from 'react';
import { EntertainmentInterface } from '../interfaces';
import { Movie } from './Movie';
import { Book } from './Book';
import { Song } from './Song';


interface Props {
  data: EntertainmentInterface;
}

export const Entertainment: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
      <h2>Favourite Movies</h2>
      <ul>
        {data.favoriteMovies.map((movie, index) => (
          <li key={index}>
            <Movie data={movie} />
          </li>
        ))}
      </ul>
      <h2>Favourite Books</h2>
      <ul>
        {data.favoriteBooks.map((book, index) => (
          <li key={index}>
            <Book data={book} />
          </li>
        ))}
      </ul>
      <h2>Favourite Songs</h2>
      <ul>
        {data.favoriteSongs.map((song, index) => (
          <li key={index}>
            <Song data={song} />
          </li>
        ))}
      </ul>
    </>
  );
};
