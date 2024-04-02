import { WorkExperienceListInterface } from '../interfaces';

export const workExperienceData: WorkExperienceListInterface = {
  list: [
    {
      company: 'PayFit',
      logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069470/resume/payfit_logo.jpg',
      position: 'Software Engineer',
      description: 'Fullstack developer',
      city: 'Remote',
      projects: [
        {
          description: [
            'Designed, developed, and deployed new features on a Gatsby/Dato website',
            'Developed and deployed Lambda functions on AWS',
            'Developed and deployed modules in Hubspot design tool',
            'Proactively sought out opportunities for innovation and implemented new methods to improve team performance',
          ],
          technos: ['NodeJs', 'React', 'Typescript', 'AWS'],
        },
      ],
      startDate: new Date('2022-09-05'),
    },
    {
      company: 'Capgemini',
      logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069468/resume/capgemini_logo.jpg',
      position: 'Software Engineer',
      description: 'Front-end developer',
      city: 'Aix en Provence',
      projects: [
        {
          description: [
            'Fullstack developer for various customers',
            'Developed in ReactJS and NodeJS (added components to existing interfaces, proof of concepts)',
            'Used Agile and SCRUM methodologies',
          ],
          technos: ['NodeJs', 'React', 'Typescript', 'Angular'],
        },
      ],
      startDate: new Date('2021-09-01'),
      endDate: new Date('2022-09-05'),
    },
    {
      company: 'Capgemini',
      logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069468/resume/capgemini_logo.jpg',
      position: 'Application Consultant',
      description: 'Fullstack developer',
      city: 'Issy les Moulineaux',
      projects: [
        {
          description: [
            'Fullstack developer for various customers',
            'Developed in ReactJS and NodeJS (added components to existing interfaces, proof of concepts)',
            'Used Agile and SCRUM methodologies',
          ],
          technos: ['NodeJs', 'React', 'Vue', 'Gitlab'],
        },
      ],
      startDate: new Date('2019-09-02'),
      endDate: new Date('2021-09-01'),
    },
    {
      company: 'Galileo Global Education',
      logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069469/resume/galileo_global_education_logo.jpg',
      position: 'Digital Marketer',
      description: '',
      city: 'Paris',
      projects: [
        {
          description: [
            'Implemented marketing optimizations to drive traffic and increase prospects',
            'Led agile project management for website launches and redesigns',
            'Managed a team of 3 people',
          ],
          technos: ['SEO', 'A/B testing', 'Drupal', 'Google Analytics'],
        },
      ],
      startDate: new Date('2018-02-06'),
      endDate: new Date('2021-09-01'),
    },
  ],
};
