const no = document.querySelector(".no");
no.addEventListener("click", function () {
  const i = Math.ceil(Math.random() * 700 + 1);
  const j = Math.ceil(Math.random() * 500 + 1);

  no.style.left = i + "px";
  no.style.top = j + "px";
});

no.addEventListener("mouseover", function () {
  const i = Math.ceil(Math.random() * 700 + 1);
  const j = Math.ceil(Math.random() * 500 + 1);

  no.style.left = i + "px";
  no.style.top = j + "px";
  no.innerHTML = "vote LEO!!, i'd never lay hands on him";
});
console.log(no);
