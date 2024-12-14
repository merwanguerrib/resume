import React, { useEffect, useState } from 'react';
import { BioBlock, SocialLink } from '../../../storyblok/types';
import { getBioData } from '../../../storyblok/queries';
import './index.css';

export const Bio = () => {
  const [bioData, setBioData] = useState<BioBlock | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBioData = async () => {
      try {
        const data = await getBioData();
        setBioData(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching bio data:', error);
        setError('Failed to load bio data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBioData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!bioData) return <div>No bio data available</div>;

  return (
    <div className="Bio">
      <h2 className="block-title">About me</h2>
      <p className="text-gray-600 mb-5">{bioData.catchPhrase}</p>
      <p>{bioData.biography}</p>
      <div className="flex flex-col space-y-4">
        <ul className="flex space-x-8">
          {bioData.qualities.map((quality, index) => (
            <li key={index} className="text-l mail-link">
              {quality}
            </li>
          ))}
        </ul>
        <ul className="flex space-x-5">
          {bioData.socialLinks?.map((link: SocialLink) => (
            <li key={link._uid}>
              {link.platform.toLowerCase() === 'email' ? (
                <a href={`mailto:${link.url}`} className="social-link-hover">
                  <i
                    className={`bx ${link.Icon} bx-flip-horizontal text-2xl`}
                  ></i>
                </a>
              ) : (
                <a
                  href={link.url}
                  className="social-link-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bx ${link.Icon} text-2xl`}></i>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-200 my-5"></div>
    </div>
  );
};
