import { ResumeInterface } from "./interfaces";

// This file contains the data used to generate the resume
const data:ResumeInterface = {
    "contactInfo": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@gmail.com",
      "address": {
        "street": "123 Main St",
        "city": "City Name",
        "zip": "12345"
      }
    },
    "bio": {
      "catchPhrase": "I'm a catch phrase",
      "bio": "I'm a bio",
      "qualities": [
        "Quality 1",
        "Quality 2",
        "Quality 3"
      ]
    },
    "education": {
      "list" : [
      {
        "school": "School Name",
        "degree": "Degree Name",
        "specialization": "Major Name",
        "city": "City Name",
        "date": "2015-01-01"
      },
      {
        "school": "School Name 2",
        "degree": "Degree Name 2",
        "specialization": "Major Name 2",
        "city": "City Name2",
        "date": "2015-01-02"
      },
      ]
    }
    ,
    "workExperiences": {
      "list": 
      [
        {
          "company": "Company Name",
          "position": "Job Title",
          "description": "Job Description",
          "city": "City Name",
          "projects": [
            {
              "description": "Mission Description",
              "technos": "Technos"
            }
          ],
          "startDate": "2015-01-01",
          "endDate": "2015-01-01"
        },
        {
          "company": "Company Name",
          "position": "Job Title",
          "description": "Job Description",
          "city": "City Name",
          "projects": [
            {
              "description": "Mission Description",
              "technos": "Technos"
            }
          ],
          "startDate": "2015-01-01",
          "endDate": "2015-01-01"
        },
      ]
    },
   
    "skills": 
    {
      "list":[
        {
          "name": "Skill Name",
          "level": 1
        },
        {
          "name": "Skill Name",
          "level": 3
        },
        {
          "name": "Skill Name",
          "level": 5
        }
      ]
    }
    ,
    "references": 
    {
      "list": [
        {
          "name": {
            "firstName": "Billy",
            "lastName": "Bob"
          },
          "company": "Company Name",
          "position": "Position Name",
          "relationship": "Reference Relationship",
          "linkedin": "https://www.linkedin.com/in/billybob",
        },
        {
          "name": {
            "firstName": "John",
            "lastName": "Smith"
          },
          "company": "Company Name",
          "position": "Position Name",
          "relationship": "Reference Relationship",
          "linkedin": "https://www.linkedin.com/in/smithjohn",
      
        }
      ]
    },
    "personalInterests": 
    {
      "list":
      [
        {
          "name": "Interest 1",
          "emoji": "🙉"
        },
        {
          "name": "Interest 2",
          "emoji": "🙊"
        },
        {
          "name": "Interest 3",
          "emoji": "🙈"
        },
      ],
    },
    "languages": {
      "list":
      [
      {
        "name": "Language 1",
        "level": 1
      },
      {
        "name": "Language 2",
        "level": 3
      },
      {
        "name": "Language 3",
        "level": 5
      }
    ]
    },
    "entertainment": {
      "favoriteMovies": [
        {
          "title": "Movie 1",
          "thumbnail": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          "description": "Movie Description",
          "rating": 5,
          "cast": [
            "Actor 1",
            "Actor 2",
            "Actor 3"
          ]
        },
        {
          "title": "Movie 2",
          "thumbnail": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          "description": "Movie Description",
          "rating": 5,
          "cast": [
            "Actor 1",
            "Actor 2",
            "Actor 3"
          ]
        }
      ],
      "favoriteSongs": [
        {
          "title": "Music 1",
          "videoclip": "https://www.youtube.com/watch?v=9bZkp7q19f0",
          "album": "Album Name",
          "rating": 5,
          "artist": "Artist 1, Artist 2, Artist 3"
        },
        {
          "title": "Music 2",
          "videoclip": "https://www.youtube.com/watch?v=9bZkp7q19f0",
          "album": "Album Name",
          "rating": 5,
          "artist": "Artist 1, Artist 2, Artist 3"
        }
      ],
      "favoriteBooks": [
        {
          "title": "Book 1",
          "preview": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          "rating": 5,
          "author": "Author"
        },
        {
          "title": "Book 1",
          "preview": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          "rating": 5,
          "author": "Author"
        }
      ]
    }
  }
  export default data;
