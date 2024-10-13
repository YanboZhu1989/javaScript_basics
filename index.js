import './index.css';
// import data from './data/db.json';
// console.log(data);
import { sidebar as sidebar_data } from './data/db.json';

// //const dom = document.getElementById("root");
// const domList = document.getElementsByClassName("test");

// // domList.array.forEach(dom => {
// //   console.log(dom);
// // });

// const dom = document.querySelector(".container");
// console.log(dom);

// const containers = document.querySelectorAll(".container");
// console.log(containers);

// containers.forEach(container => {
//   console.log(container);
// });

// containers.forEach((item, i) => {
//   console.log(item, i);
// });

const mainLeft = document.querySelector("main .container .main-left");

mainLeft.innerHTML = null;

const sideBar = document.createElement("div");
sideBar.classList.add("sidebar");
mainLeft.appendChild(sideBar);


sidebar_data.forEach(item => {
  const sideBarItem = document.createElement("a");
  sideBarItem.classList.add("menu-item");
  const span = document.createElement("span");
  const i = document.createElement("i");
  item.icon_class_list.forEach(icon_class => {
    i.classList.add(icon_class);
  });
  sideBarItem.classList.add(item.name)
  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  span.appendChild(i);
  sideBarItem.appendChild(span);
  sideBarItem.appendChild(h2);
  sideBar.appendChild(sideBarItem);
});

// create post
const createPost = document.createElement("label");
createPost.classList.add("btn", "btn-primary");
createPost.textContent = "Create Post";
createPost.setAttribute("for", "create-post");
mainLeft.appendChild(createPost);

// profile
const profile = document.createElement("a");
profile.href = "#";
profile.classList.add("profile");

const profilePhoto = document.createElement("div");
profilePhoto.classList.add("profile-image");

const img = document.createElement("img");
img.alt = "profile photo";
img.src = "/images/images/profile/profile_1.png";
profilePhoto.appendChild(img);

const profileDescription = document.createElement("div");
profileDescription.classList.add("profile-description");
const profileDescription_h2 = document.createElement("h2");
profileDescription_h2.textContent = "Elden Lord";
const profileDescription_p = document.createElement("p");
profileDescription_p.textContent = "@EldenRing";
profileDescription.appendChild(profileDescription_h2);
profileDescription.appendChild(profileDescription_p);

profile.appendChild(profilePhoto);
profile.appendChild(profileDescription);
mainLeft.prepend(profile);

console.log(mainLeft);

// const homeDome = document.querySelector(".Home");
// console.log(homeDome);

// homeDome.addEventListener("click", () => {
//   homeDome.classList.toggle('btn');
//   homeDome.classList.toggle('btn-cancel');
// });

// mainLeft.innerHTML = null;

// // mainLeft.innerHTML = `
// //   <h1 class="btn btn-primary">Hello</h1>
// // `;

// const createDiv = document.createElement("div");
// createDiv.classList.add("test");
// createDiv.id = "test";

// createDiv.textContent = "Hello World";

// mainLeft.appendChild(createDiv);




// mainLeft.textContent = "Hello World";