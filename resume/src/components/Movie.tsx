import React from 'react';
import { MovieInterface } from '../interfaces';

interface Props {
  data: MovieInterface;
}

export const Movie: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>{data.title}</h2>
      {data.thumbnail && <img src={data.thumbnail} alt={data.title} />}
      {data.description && <p>{data.description}</p>}
      {data.rating && <p>Rating: {data.rating}/5</p>}
      {data.cast && (
        <>
          <h3>Cast</h3>
          <ul>
            {data.cast.map(actor => (
              <li>{actor}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
