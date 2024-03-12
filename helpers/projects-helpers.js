import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

const imgArr = [
  { id: "p1", img: propertyImg },
  { id: "p2", img: cryptoImg },
  { id: "p3", img: twitchImg },
  { id: "p4", img: netflixImg },
];
export async function getAllProjects() {
  const response = await fetch(process.env.FIREBASE_URL);
  const data = await response.json();
  const projects = [];

  for (const key in data) {
    projects.push({
      id: key,
      ...data[key],
    });
  }

  return projects;
}

export async function getProjectById(id) {
  const allProjects = await getAllProjects();
  return allProjects.find((project) => project.id === id);
}

export function getImage(id) {
  const projectImg = imgArr.find((project) => project.id === id);
  return projectImg.img;
}

export function strHandler(str) {
  let strArr = str.split("/");
  return strArr;
}
