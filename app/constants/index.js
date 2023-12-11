import {} from "../asset/icon";
import {
  c,
  cpp,
  django,
  expressjs,
  flask,
  java,
  javascript,
  python,
  mongodb,
  nodejs,
  react,
  restapi,
} from "../asset/icon";
import { sec1, sec2, sec3, sec4 } from "../asset/images";

const skillset = [
  {
    title: "Programming Language's",
    skills: [
      {
        name: "Python",
        iconURL: "python",
      },
      {
        name: "JavaScript",
        iconURL: "javascript",
      },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      {
        name: "React",
        iconURL: "reactjs",
      },
      {
        name: "Django",
        iconURL: "django",
      },
    ],
  },
];

const projectlist = [
  {
    name: "Amazon 2.0",
    images: [sec1, sec2, sec3, sec4],
    description:
      "Amazon 2.0 is a visionary e-commerce project, meticulously crafted using the power of React and Django Rest Framework. Offering an intuitive, modern interface, it revolutionizes online shopping. With advanced features like personalized product recommendations, lightning-fast search, and robust security, Amazon 2.0 ensures a seamless and secure shopping experience. ",
    techstack: [
      {
        name: "Ract",
        iconURL: react,
      },
      {
        name: "django",
        iconURL: django,
      },
      {
        name: "Rest API",
        iconURL: restapi,
      },
    ],
    Livelink: "https://www.amazon.in/",
    gitlink: "https://github.com/ojus208/amazon-clone",
  },
];


const mystrengths = [
  {
    title:"Problem Solver",
    desc:"I am better problem solver by keep calm at tricky sitiuation and use my mind i am able to solve complex problem's"
  },
  {
    title:"Fast Worker",
    desc:"When I decide to do something I really get the thing very seriously and done my work under time"
  },
  {
    title:"Good Programmer",
    desc:"I really have good programming skills that help me to slove tricky question very fast and effencintly"
  }
]

export { skillset, projectlist, mystrengths };
