import React from 'react';
import { BookInterface } from '../../interfaces';

interface Props {
  data: BookInterface;
}


export const Book: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Rating: {data.rating}</p>
    </div>
  );
};
