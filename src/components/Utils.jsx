import kotlin_logo from '../assets/logo_images/kotlin-logo.svg';
import java_logo from '../assets/logo_images/java-logo.svg';
import javascript_logo from '../assets/logo_images/javascript-logo.svg';
import android_studio_logo from '../assets/logo_images/android-studio-logo.svg';
import firebase_logo from '../assets/logo_images/firebase-logo.svg';
import figma_logo from '../assets/logo_images/figma-logo.svg';
import git_logo from '../assets/logo_images/git-logo.svg';
import github_logo from '../assets/logo_images/github-logo.svg';
import vscode_logo from '../assets/logo_images/vscode-logo.svg';
import nodejs_logo from '../assets/logo_images/nodejs-logo.svg';
import expressJS_logo from '../assets/logo_images/expressJS_logo.svg';
import mongoDB_logo from '../assets/logo_images/mongoDB_logo.svg';
import postman_logo from '../assets/logo_images/postman_logo.svg';
import html_logo from '../assets/logo_images/html_logo.svg';
import intelliJ_logo from '../assets/logo_images/intelliJ_logo.svg';
import reactjs_logo from '../assets/react.svg';
import spring_boot_logo from '../assets/logo_images/spring_boot_logo.svg';
import python_logo from '../assets/logo_images/python_logo.svg';
import mysql_logo from '../assets/logo_images/mysql_logo.svg';


// projects banner
import project_Banner from '../assets/project_Banner.png';
import banner_movie_Pro_App from '../assets/banner_movie_Pro_App.png';
import banner_ecommerce_android_app from '../assets/banner_ecommerce_android_app.png';
import banner_Insta_Content_Saver_App from '../assets/banner_Insta_Content_Saver_App.png';
import banner_spring_boot_ecommerce_microservices from '../assets/banner_spring_boot_ecommerce_microservices.png';
import banner_spring_boot_react_ai_project from '../assets/banner_spring_boot_react_ai_project.png';


export const AboutMeContent = `Hi there, this is <b>Yash</b> and I'm a <b>Native Android</b> and <b>Full-Stack Web Developer</b>.
I'm also a <b>UI Designer</b> and I love to design beautiful and user-friendly interfaces.
I'm a <b>self-taught developer</b> and I love to learn new things and explore new technologies.

I'm from <b>Lucknow</b> and currently a <b>Final Year Computer Science and Engineering Student</b> with a CGPA of 7/10`;

export const WorkExperienceData = [
    {
      id: 1,
      company: "TechiEco Solutions",
      role: "Android Developer Intern (Remote)",
      duration: "Oct 2023 - Jan 2024",
      description: [
        "Java, Kotlin, XML, Firebase, MVVM",// Tech Stack
        "Developed the app and implemented phone authentication using Firebase.",
        "Optimized existing code and resolved bugs, enhancing overall app performance.",
        "Gained experience in building responsive UIs with the Intuit SDP library and Lottie animations.",
        "Learned how to access MAC and IP addresses."
      ],
    },
    {
      id: 2,
      company: " Bhuljal Daily Solutions",
      role: "Android Developer Intern (Remote)",
      duration: "Sep 2023 - Oct 2023",
      description: [
        "Java, Kotlin, XML, Firebase", // Tech Stack
        "Developed and contributed to the company’s app, focusing on the cart functionality.",
        "Optimized the existing code and fixed bugs to improve app performance.",
        "Learned to implement user authentication using Google Sign-In and Facebook Sign-In.",
      ],
    },
  ];
  

  export const skillsData = [
    {
      id: 1,
      name: "Kotlin",
      image: kotlin_logo, // Replace with the actual path in your project
    },
    {
      id: 2,
      name: "Java",
      image: java_logo,
    },
    {
      id: 3,
      name: "JavaScript",
      image: javascript_logo,
    },
    {
      id: 4,
      name: "Android Studio",
      image: android_studio_logo,
    },
    {
      id: 5,
      name: "Firebase",
      image: firebase_logo,
    },
    {
      id: 6,
      name: "Figma",
      image: figma_logo,
    },
    {
      id: 7,
      name: "Git",
      image: git_logo,
    },
    {
      id: 8,
      name: "GitHub",
      image: github_logo,
    },
    {
      id: 9,
      name: "VS Code",
      image: vscode_logo,
    },
    {
      id: 10,
      name: "NodeJS",
      image: nodejs_logo,
    },
    {
      id: 11,
      name: "ExpressJS",
      image: expressJS_logo,
    },
    {
      id: 12,
      name: "Mongo DB",
      image: mongoDB_logo,
    },
    {
      id: 13,
      name: "Postman",
      image: postman_logo,
    },
    {
      id: 14,
      name: "HTML",
      image: html_logo,
    },
    {
      id: 15,
      name: "IntelliJ",
      image: intelliJ_logo,
    },
    {
      id: 16,
      name: "ReactJS",
      image: reactjs_logo, // Replace with the actual path in your project
    },
    {
      id: 17,
      name: "Spring Boot",
      image: spring_boot_logo, // Replace with the actual path in your project
    },
    {
      id: 18,
      name: "Python",
      image: python_logo, // Replace with the actual path in your project
    },
    {
      id: 19,
      name: "MySQL",
      image: mysql_logo, // Replace with the actual path in your project
    }
  ];
  

  
export const androidProjects = [
  {
    id: 1,
    name: " Movie Pro App",
    techStack: "Kotlin, MVVM, Retrofit, Paging3, RxJava3 with Retrofit, ViewModel, Lifecycle-LiveData",
    githubLink: "https://github.com/YashSingh25/MoviePro-App-Using-Paging/tree/master",
    liveLink: "",
    image: banner_movie_Pro_App , // Replace with the actual image path
  },
  {
    id: 2,
    name: " Instagram Content Saver App",
    techStack: "Java, XML, Volley, Glide, Gson",
    githubLink: "https://github.com/YashSingh25/Instagram-Content-Saver-App",
    liveLink: "",
    image: banner_Insta_Content_Saver_App,
  },
  {
    id: 3,
    name: "E-commerce App",
    techStack: "Java, XML, Volley, Glide, Material Components, whynotimagecarousel , TinyCart , AdvancedWebView",
    githubLink: "https://github.com/YashSingh25/eCommerce-App/tree/master",
    liveLink: "",
    image: banner_ecommerce_android_app,
  },
];


// utils.js
export const springBootProjectsData = [
  {
    id: 1,
    name: "E-Commerce Microservices App",
    techStack: "Spring Boot, Microservices, MySQL, Kafka",
    githubLink:
      "https://github.com/YashSingh25/e-commerce-backend-microservices-app/tree/master",
    liveLink: "", // Add live link here if applicable
    image: banner_spring_boot_ecommerce_microservices, // Replace with actual image path
  },
  {
    id: 2,
    name: "OpenAI React App",
    techStack: "Spring Boot, OpenAI API, RESTful APIs",
    githubLink:
      "https://github.com/YashSingh25/spring-ai-openAi-project/tree/master",
    liveLink: "", // Add live link here if applicable
    image: banner_spring_boot_react_ai_project, // Replace with actual image path
  },
];


export const footerData = {
  email: "code.yash25@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      icon: "FaGithub",
      link: "https://github.com/YashSingh25",
    },
    {
      name: "LinkedIn",
      icon: "FaLinkedin",
      link: "https://www.linkedin.com/in/yash-singh-a73bb220b/",
    },
    {
      name: "LeetCode",
      icon: "SiLeetcode",
      link: "https://leetcode.com/u/hustleryash25/",
    },
    {
      name: "GeeksforGeeks",
      icon: "SiGeeksforgeeks",
      link: "https://www.geeksforgeeks.org/user/hustler0lb3/",
    },
  ],
};
