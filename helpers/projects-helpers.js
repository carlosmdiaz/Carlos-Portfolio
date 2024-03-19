import cryptoImg from "../public/assets/projects/crypto.jpg";
import unityImg from "../public/assets/projects/unity.jpg";
import weatherImg from "../public/assets/projects/weather.jpg";
import todoImg from "../public/assets/projects/todo.jpg";

const imgArr = [
  { id: "p1", img: cryptoImg },
  { id: "p2", img: unityImg },
  { id: "p3", img: todoImg },
  { id: "p4", img: weatherImg },
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
