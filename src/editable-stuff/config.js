// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kevin",
  middleName: "",
  lastName: "Ma",
  message: "Passionate about doing good things in the world, one line of code at a time. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kevinma0522",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kevinma.jpeg"),
  imageSize: 375,
  message:
    "My name is Kevin Ma. I am currently a student at Columbia University, graduating in December 2025. I'm an absolute grinder who doesn't hesitate to do 40-hour coding marathons to accomplish goals. I've founded and scaled a startup from pre-idea to $400k pre-seed funding, have multiple years of experience working for Amazon, and extensive machine learning experience through both my two years working as a machine learning intern and now where I'm deploying in-house quant models for my fintech products. I'm passionate about using skills in software engineering to better people's lives, and in my free time I like working on iOS apps and build tools or full-length interactive courses for topics I think people will find useful. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kevinma0522", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

const personalProjects = {
  show: true,
  heading: "Personal Projects",
  projects: [
    {
      name: "AgentOmen",
      description: "AgentOmen is a fintech startup I founded and developed that has raised $400k in pre-seed funding. It's the first ever agentic investment platform registered with the SEC, revolutionizing the way people invest through AI-powered agents. The platform combines advanced machine learning models with user-friendly interfaces to democratize sophisticated investment strategies.",
      images: [
        require("../assets/img/omen_og_image.png")
      ],
      links: ["https://agentomen.com"],
      linkDescription: "Visit AgentOmen.com"
    },
    {
      name: "wya",
      description: "wya is a social media startup developed by a 2-person team. The app focuses on hyperlocality as a social media niche, users profiles only show up on other users' feed if they are in the same general location, aiming to encourage in-person connections and revitalize  the culture of talking to new people in new environments. ",
      images: [
        require("../editable-stuff/wya_images/create.png"),
        require("../editable-stuff/wya_images/customize.png"),
        require("../editable-stuff/wya_images/discover.png"),
        require("../editable-stuff/wya_images/drop.png"),
        require("../editable-stuff/wya_images/new.png"),
        require("../editable-stuff/wya_images/see.png")
      ],
      links: ["https://apps.apple.com/us/app/wya-where-you-at/id6443438938"],
      linkDescription: "App Store Launch Link"
    },
    // Add more personal projects here
    {
      name: "ML Sports Training Research",
      description: "These projects were developed during covid as an alternative to tennis coaches. As a player, coaching can be really expensive, and even in non-covid times, there's situations where players would like to train alone. Thus I developed two real-time data classifcation systems for tennis and table tennis, to achieve the goal of 'training' users at low cost with high accuracy.",
      images:[
        require("../editable-stuff/Research/architecture.png"),
        require("../editable-stuff/Research/pingpongexample.png"),
        require("../editable-stuff/Research/tennisexample.png")
      ],
      links:["https://ieeexplore.ieee.org/document/9253157","https://ieeexplore.ieee.org/document/9378695"],
      linkDescription:"Research Conference Publications"
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C++", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for new-grad entry-level Software Engineering, UI/UX Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "k.ma@columbia.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Data Engineer/SWE Intern @ Amazon',// Here Add Company Name
      companylogo: require('../assets/img/images.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/toyon.jpeg'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos,personalProjects,skills, leadership, getInTouch, experiences};
