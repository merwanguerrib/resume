import React from 'react';
import { ReferenceListInterface } from '../interfaces';
interface ReferenceProps {
  data: ReferenceListInterface;
}

export const References: React.FC<ReferenceProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>References</h2>
      {data.list.map((reference, index) => (
        <div key={index}>
          <h3>{reference.name.firstName} {reference.name.lastName}</h3>
          <p>Company: {reference.company}</p>
          <p>Position: {reference.position}</p>
          <p>Relationship: {reference.relationship}</p>
          <p>LinkedIn: <a href={reference.linkedin}>View Linkedin profile</a></p>
        </div>
      ))}
    </div>
  );
}
