const FAKE_API_URL = "http://127.0.0.1:3000/day%205/dynamic-porfolio/info.json";

async function getData() {
  try {
    const response = await fetch(FAKE_API_URL);

    if (!response.ok) {
      console.log(`Status Code: ${response.status}`);
    }
    // console.log(response.status); // 200 if the data is successfully arrive

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Data to be send in the server
// const dataToBePost = {
//   name: "Python",
//   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
// };

// const postOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(dataToBePost),
// };

// const POST_URL =
//   "http://127.0.0.1:3000/day%205/dynamic-porfolio/info.json/skills";

// async function postData() {
//   try {
//     const response = await fetch(POST_URL, postOptions);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

async function displayData() {
  const { information, experiences, skills } = await getData();
  const [name, title, location, introduction, about] = information;

  document.getElementById("name").innerText = name;
  document.getElementById("title").innerText = title;
  document.getElementById("location").innerText = location;
  document.getElementById("introduction").innerText = introduction;
  document.getElementById("about").innerText = about;

  const experienceList = document.getElementById("experience-list");
  experiences.forEach((experience) => {
    const li = document.createElement("li");
    li.innerText = `${experience.position} at ${experience.company} (${experience.job_type})`;
    experienceList.appendChild(li);
  });

  const skillsList = document.getElementById("skills-list");
  skills.forEach((skill) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    img.src = skill.src;
    li.innerText = skill.name;
    div.appendChild(li);
    div.appendChild(img);
    skillsList.appendChild(div);
  });
}

window.addEventListener("load", displayData);

// HTTP methods: GET (200), POST (201), PUT, PATCH, DELETE
// Status Code: 200(OK), 201 (Create), 404 (Not found)
