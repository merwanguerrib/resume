import { BioInterface } from "../interfaces";

interface BioProps {
 data : BioInterface
}

export const Bio: React.FC<BioProps> = (props) => {
  const { data } = props;
  return (
    <div>
      {data.catchPhrase && <h2>{data.catchPhrase}</h2>}
      {data.bio && <p>{data.bio}</p>}
      {data.qualities && (
        <ul>
          {data.qualities.map((quality, index) => (
            <li key={index}>{quality}</li>
          ))}
        </ul>
      )}
    </div>
  );
}