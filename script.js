let index = 1;
slideShow(index);

function slideShow(n) {
  const article = document.querySelectorAll("article");
  const click = document.querySelectorAll(".click");

  const nav = Array.from(click);
  if (n > article.length) {
    index = 1;
  }
  if (n < 1) {
    index = article.length;
  }

  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");
  }

  article[index - 1].style.display = "block";
  nav[index - 1].className += " active";
  console.log();
}
