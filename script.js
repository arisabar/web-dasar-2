function openPage(pageName) {
  const tabContent = document.getElementsByClassName("content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
