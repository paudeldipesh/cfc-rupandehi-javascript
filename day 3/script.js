console.log("first");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => console.log(data.name));
  })
  .catch((error) => console.log(error.message));
console.log("last");

alert("Hello World"); // Blocking Code (synchronous code)
console.log("This will print after above code.");

console.log("This is first");
// Non-bloking Code (asynchronous code)
setTimeout(() => console.log("This will run after 2 second"), 2000);
console.log("This is last");

const containerEl = document.getElementById("container"); // container tag access
containerEl.innerHTML = "<h1>Code</h1>";
containerEl.classList.add("container");
let imageTag = document.createElement("img");
imageTag.src = "nature.jpg";
imageTag.alt = "Nature Image";
containerEl.appendChild(imageTag);

const dataEl = document.getElementById("data");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach((object) => {
      const divTag = document.createElement("div");
      divTag.innerHTML = `
        <h2 class="user-name">${object.name}</h2>
        <h3 class="street">${object.address.street}</h3>
      `;

      dataEl.appendChild(divTag);
    });
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
