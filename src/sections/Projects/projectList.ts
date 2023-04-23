import { projectsImg } from '../../assets/images/projects/projectsImg'
import { v1 } from 'uuid'

export type ProjectType = Record<
  'id' | 'screenShot' | 'title' | 'url' | 'description' | 'demo',
  string
>

export const projectList: Array<ProjectType> = [
  {
    id: v1(),
    screenShot: projectsImg.samuraiNetwork,
    title: 'Social Network',
    url: 'https://github.com/beliy-beret/incubator-social-network',
    demo: 'https://incubator-social-network-iota.vercel.app/',
    description:
      'You can fetch all users, add some users to friend list, send messages, change profile data, upload photo. App created Create-React-App with TypeScript and Redux templates. Axios is used to work with API. Design made by Ant Design library.',
  },
  {
    id: v1(),
    screenShot: projectsImg.weather,
    title: 'Weather app',
    url: 'https://github.com/beliy-beret/weather_app',
    demo: 'https://weather-app-mauve-pi.vercel.app/',
    description:
      'The current weather condition in the selected city comes from the server. You can switch the display of data in metric or imperial units. App created with Create-React-App. Axios is used to work with API. Application state is managed by redux. Design made by MaterialUI library.',
  },
  {
    id: v1(),
    screenShot: projectsImg.counter,
    title: 'Counter',
    url: 'https://github.com/beliy-beret/React-Counter',
    demo: 'https://react-counter-eta.vercel.app/',
    description:
      'App created Create-React-App with TypeScript and Redux Toolkit templates. LocalStorage for save data. Storybook for project docs. Jest for tests.',
  },
  {
    id: v1(),
    screenShot: projectsImg.JsonPlaceholder,
    title: 'JSONPlaceholder',
    demo: 'https://jsonp-laceholder-1cv36q6m9-beliy-beret.vercel.app/',
    url: 'https://github.com/beliy-beret/JSONPlaceholder',
    description:
      'App created Create-React-App with TypeScript template. Axios is used to work with API. Application state is managed by Redux Toolkit. Design made by MaterialUI library.',
  },
  {
    id: v1(),
    screenShot: projectsImg.petShop,
    title: 'Pet shop',
    demo: 'https://pet-shop-a5zi30f0r-beliy-beret.vercel.app/',
    url: 'https://github.com/beliy-beret/petShop',
    description:
      'App created with Create-React-App. Application state is managed by Redux Toolkit. Design made by CSS modules.',
  },
  {
    id: v1(),
    screenShot: projectsImg.snake,
    title: 'Snake',
    url: 'https://github.com/beliy-beret/Snake',
    demo: 'https://snake-i4kk3k2na-beliy-beret.vercel.app/',
    description:
      'Canvas project. The game is based on the materials of the book "JavaScript for children". Prod build with Parcel.',
  },
  {
    id: v1(),
    screenShot: projectsImg.computer,
    title: 'Computer courses',
    demo: 'https://beliy-beret.github.io/Computer_course/',
    url: 'https://github.com/beliy-beret/Computer_course',
    description:
      'Project created with HTML, SCSS, and JavaScript / JQuery. Design from Figma template.',
  },
  {
    id: v1(),
    screenShot: projectsImg.news,
    title: 'News portal',
    demo: 'https://beliy-beret.github.io/News/',
    url: 'https://github.com/beliy-beret/News',
    description: 'Skill Box HTML course.',
  },
  {
    id: v1(),
    screenShot: projectsImg.slider,
    title: 'JS slider',
    demo: 'https://beliy-beret.github.io/JS_Slider/',
    url: 'https://github.com/beliy-beret/JS_Slider',
    description: 'Simple slider created with JavaScript, CSS and HTML',
  },
]
