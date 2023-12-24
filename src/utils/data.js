import codepen from '../assets/images/codepen.png'
import netflixclone from '../assets/images/netflixclone.png'
import ecommerce from '../assets/images/ecommerce.png'

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image:
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            },
            {
                name: "Redux",
                image:
                    "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            },
            {
                name: "HTML",
                image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
            },
            {
                name: "CSS",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            },
            {
                name: "JavaScript",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            },
            {
                name: "Bootstrap",
                image:
                    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            }
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                image:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            },
            {
                name: "C++",
                image: "https://www.enukesoftware.com/wp-content/uploads/lp-c.png"
            }
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "Firebase",
                image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
            },
            {
                name: "Git",
                image:
                    "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
            },
            {
                name: "GitHub",
                image:
                    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            },
            {
                name: "Netlify",
                image:
                    "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
            },
            {
                name: "VS Code",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
            },
            {
                name: "Postman",
                image:
                    "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
            }
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "https://prodsitecoreecommimg.nyrr.org/nyrrsitecoreblob/nyrr/logo/partners/final-identity-for-tcs_colour_1180x800.png",
        role: "React developer",
        company: "Tata consultancy services",
        date: "May 2021 - Present",
        desc: "Working on the frontend of customer management website using React JS , redux and reactstrap",
        skills: [
            "React JS",
            "Redux",
            "Reactstrap",
            "Postman",
            "Git"
        ]
    }
];


export const projects = [
    {
        id: 0,
        title: "CodePen clone",
        description:
            "A live code editor used to write HTML ,CSS and javascript code.Developed using React JS.",
        image: codepen,
        tags: [
            "React Js",
            "Redux-toolkit",
            "Firebase",
            "Tailwind CSS"
        ],
        github: "https://github.com/mohanevin/codepen-clone",
    },
    {
        id: 1,
        title: "Netflix Clone",
        description:
            "A responsive website fetches the live data from TMDB API and displays it under various catergory.",
        image: netflixclone,
        tags: ["React Js", 
         "Redux",
         "TMDB API",
         "Firebase",
        "Tailwind CSS"
        ],
        github: "https://github.com/mohanevin/netflix-clone",
    },
    {
        id: 2,
        title: "Shopfiy",
        description:
            "A responsive ecommerce website used to order products under various catergories",
        image:ecommerce,
        tags: [
            "React Js",
            "Redux",
            "Firebase",
            "Tailwind CSS"
        
        ],
        github: "https://github.com/mohanevin/Ecommerce",
    },

]