module.exports = {
  siteTitle: 'Hi! This is my CV!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Duong Xuan Nam',
  twitterUsername: '_franciscodf',
  githubUsername: 'duongxuannam',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    }
  ],
  jobs: [
    {
      company: "Lendico",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."

    }, {
      company: "Anapro",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."

    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    facebook: "https://www.facebook.com/nam.xuan.75",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/duongxuannam/",
    email: "duongxuannam1995@gmail.com"
  },
  siteUrl: 'https://github.com/duongxuannam/mycv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-131359385-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Duong Xuan Nam',
      url: '/',
    }
  ]
}