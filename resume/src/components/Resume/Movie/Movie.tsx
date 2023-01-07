import React from 'react';
import { MovieInterface } from '../../../interfaces';

interface Props {
  data: MovieInterface;
}

export const Movie: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>{data.title}</h2>
      {data.posterURL && <img src={data.posterURL} alt={data.title} />}
      {data.overview && <p>{data.overview}</p>}
      {data.popularity && <p>popularity: {data.popularity}/5</p>}
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
