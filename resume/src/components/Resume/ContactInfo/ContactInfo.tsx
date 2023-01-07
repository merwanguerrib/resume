import React from 'react';
import { ContactInfoInterface } from '../../../interfaces';

interface Props {
  data: ContactInfoInterface
}

export const ContactInfo: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Name: {data.firstName} {data.lastName}</p>
      <p>Email: {data.email}</p>
      <h3>Address</h3>
      <p>
        {data.address.street}, {data.address.city}, {data.address.zip}
      </p>
    </div>
  );
};
