export interface Client {
  name: string;
  logo?: string;
  url?: string;
}

export const clientsData: Client[] = [
  {
    name: 'PayFit',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069470/resume/payfit_logo.jpg',
  },
  {
    name: 'Capgemini',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069468/resume/capgemini_logo.jpg',
  },
  {
    name: 'Galileo',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069469/resume/galileo_global_education_logo.jpg',
  },
  { name: 'Klappo' },
  { name: 'Stryve' },
];
