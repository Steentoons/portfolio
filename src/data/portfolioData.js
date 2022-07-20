import projectIMG1 from "../assets/images/portfolio/portfolio1.png"
import projectIMG2 from "../assets/images/portfolio/portfolio2.png"
import projectIMG3 from "../assets/images/portfolio/portfolio3.png"

export const portfolio = [{
        img: projectIMG1,
        title: "COUNTRIES REST",
        desc: `This is an advanced challenge from Frontend Mentor where I was to integrate with Rest Country API to pull country data and display them as per the provided design. The user could search for countries, filter countries by region, see individual countries, and optionally change the site to dark or light mode.  

        I used React Js, CSS, and Axios to fetch the data and complete the rest of the challenge. I learned a few things from the project that included better handling async functions, persisting states using functional components, and an effective way to switch dark mode from the user's system preference.`,
        liveSite: "http://",
        repo: "https://github.com/Steentoons/Countries-REST",
        frontendMentor: "http://",
    },
    {
        img: projectIMG2,
        title: "ROCK PAPER SCISSORS",
        desc: `A solution to the advanced Frontend Mentor challenge needed a user to play a game versus a computer showing scores and game results. You can see the game is responsive across multiple device screens, done with a mobile-first approach. I used React Js and CSS to handle UI, and React Redux to handle state change. I also used Redux-Persist to persist state on reload, and Lodash Throttle to manage function calls. Used Vanilla Js to do the computer moves plus the logic to calculate the results and determine the winner.`,
        liveSite: "https://steentoons.github.io/rock-paper-scissors/",
        repo: "https://github.com/Steentoons/rock-paper-scissors",
        frontendMentor: "http://",
    },

    {
        img: projectIMG3,
        title: "SHORTEN URLS",
        desc: `A solution to the advanced Frontend Mentor challenge needed a user to play a game versus a computer showing scores and game results. You can see the game is responsive across multiple device screens, done with a mobile-first approach. I used React Js and CSS to handle UI and React Redux to do state changes. I also used Redux-Persist to persist state on reload and Lodash Throttle to manage function calls. I employed Vanilla Js to do the computer moves plus the logic to calculate the results and determine the winner.  `,
        liveSite: "https://steentoons.github.io/easybank_solution/",
        repo: "https://github.com/Steentoons/easybank_solution",
        frontendMentor: "http://",
    },
];