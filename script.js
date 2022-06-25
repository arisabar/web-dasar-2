let url = window.location.href;
console.log(url);
let index = url.indexOf("#");
if (index !== -1) {
  let hash = url.substring(index + 1);
  if (hash !== null) {
    openPage(hash);
  }
}
console.log(index);
function openPage(pageName) {
  const tabContent = document.getElementsByClassName("content");
  const navLink = document.getElementsByClassName("click");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.remove("active");
  }
  // console.log(pageName);
  // console.log(navLink);
  let element = document.getElementById("nav-" + pageName);
  element.classList.add("active");
  let pages = (document.getElementById(pageName).style.display = "block");
  return pages;
}

const mode = document.getElementById("dark");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  mode.innerText = "Dark Mode";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  mode.innerText = "Light Mode";
  document.body.classList.add("dark-theme");
}

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    mode.innerText = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    mode.innerText = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
