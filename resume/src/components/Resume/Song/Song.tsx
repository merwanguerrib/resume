// a component with the SongInterface as props

import React from 'react';
import { SongInterface } from '../../../interfaces';

interface Props {
  data: SongInterface;
}

export const Song: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Album: {data.album}</p>
      {data.videoclip && (
        <iframe
          width="560"
          height="315"
          src={data.videoclip}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <p>Rating: {data.rating}
      </p>
    </div>
  );
};
