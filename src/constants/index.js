import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  stpauls,
  netflix,
  clearSki,
  tkm,
  papertrail,
  skillSail,
  broto,
  desvu,
  masco,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certification",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Electronics Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Development-MERN Stack",
    company_name: "Brototype",
    icon: broto,
    iconBg: "#E6DEDD",
    date: "January 2023 - January 2024",
    points: [],
  },
  {
    title: "Front End Developer",
    company_name: "Desvutrip Travel Solutions LLP",
    icon: desvu,
    iconBg: "#E6DEDD",
    date: "July 2021 - January 2023",
    points: [],
  },
  {
    title: "Procurement Associate",
    company_name: "Masco Constructions",
    icon: masco,
    iconBg: "#E6DEDD",
    date: "June 2020 - April 2021",
    points: [],
  },
  {
    title: "B.Tech, ECE",
    company_name: "TKM College of Engineering",
    icon: tkm,
    iconBg: "#E6DEDD",
    date: "2016 - 2020",
    points: [],
  },
  {
    title: "Higher-Secondary Education",
    company_name: "S.T Paul's Higher Secondary School",
    icon: stpauls,
    iconBg: "#E6DEDD",
    date: "2014 - 2016",
    points: [],
  },
];

const projects = [
  {
    name: "SkillSail-eLearning",
    description:
      "This MERN-powered e-learning platform equips you with the essential life and business skills you need to succeed. Craft and share interactive courses, foster collaboration through real-time chat, and enjoy a seamless learning experience with secure logins, beautiful design, and convenient payment options. SkillSail, where your growth knows no bounds!",
    tags: [
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS ",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Nodemailer",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
      {
        name: "AWS Route53",
        color: "pink-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "green-text-gradient",
      },
      {
        name: "AJAX-AXIOS",
        color: "blue-text-gradient",
      },
    ],
    image: skillSail,
    source_code_link: "https://github.com/SudhinDevan/SkillSail-Client",
    live_link: "https://skillsail.vercel.app/",
    features: [
      "Implemented a secure registration and authentication system using JWT for enhanced security",
      "Implemented Socket.IO for real-time chat on SkillSail, fostering interactivity among students and tutors",
      "Utilized Tailwind CSS to ensure an appealing and user-friendly interface",
      "Utilized REST API for seamless integration and efficient handling of API calls",
      "Implemented Cloudinary for storing videos and images",
      "Implemented Nodemailer for enabling the mail services",
      "Integrated RazorPay for secure and efficient payment processing, supporting various payment methods on the platform",
      "Hosted using AWS EC2 AWS Route53 along with Nginx as web server, and also deployed on Vercel for additional hosting options.",
    ],
  },
  {
    name: "Papertrail",
    description:
      "Explore a vast literary universe at our online bookstore, where words come to life and stories await discovery. Immerse yourself in a curated collection spanning genres and authors. From timeless classics to contemporary gems, our digital shelves offer a seamless reading experience. Your next adventure begins with a click.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "blue-text-gradient",
      },
      {
        name: "SweetAlert ",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "Bcrypt",
        color: "green-text-gradient",
      },
      {
        name: "Session",
        color: "pink-text-gradient",
      },
      {
        name: "Nodemailer",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
      {
        name: "AWS Route53",
        color: "pink-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "green-text-gradient",
      },
      {
        name: "AJAX-AXIOS",
        color: "blue-text-gradient",
      },
    ],
    image: papertrail,
    source_code_link: "https://github.com/SudhinDevan/papertrail",
    live_link: "https://papertrail.sudhindevan.com",
    features: [
      "nodemailer email OTP verification",
      "Banner display and management",
      "fully fledged search sort filter page",
      "Wishlist for saving liked items",
      "Shopping Cart for adding items to be checked out",
      "Change Password and reset password",
      "Product returns and admin approval",
      "User wallet with amount credit on returns",
      "Coupons for item discounts",
      "Fully fledged admin dashboards",
      "Orders and order Status management",
      "Invoice for Orders placed",
      "Fully functional product management",
    ],
  },
  {
    name: "Employee Management",
    description:
      "Efficient React-based Employee Management Project empowering admins to seamlessly oversee, add, edit, and control employee access. Streamlined signup process ensures hassle-free onboarding for new team members.",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "Express.JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "Multer",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Bcrypt",
        color: "green-text-gradient",
      },
      {
        name: "AJAX-AXIOS",
        color: "blue-text-gradient",
      },
    ],
    image: clearSki,
    source_code_link: "https://github.com/SudhinDevan/Employee_Management",
    live_link: "",
    features: [
      "Employee signup with Validation",
      "Employee Profile with details and edit feature",
      "Employee image upload with multer",
      "Admin profile with display image",
      "Admin user listing with edit, Block/Unblock",
    ],
  },

  {
    name: "Netflix clone",
    description:
      "This is a post login Netflix clone. a React-based mini-project developed for learning purposes. In this exciting project, I've utilized data from the tmdb database to showcase a collection of movies. Explore the world of cinema right from this clone and enjoy the movie trailers of your favorite films!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Axios ",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React YouTube",
        color: "blue-text-gradient",
      },
      {
        name: "DOM",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/SudhinDevan/Netflix_Clone",
    live_link: "https://sudhindevan.github.io/Netflix_Clone/",
    features: [
      "Used advaced CSS for styling",
      "Used TMDB API for movie datas",
      "Mobile responsive",
    ],
  },
];

export { services, technologies, experiences, projects };
