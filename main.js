const word = document.getElementById("word");
const char = document.getElementById("char");

let subject = document.getElementById("subject");

const copy = document.querySelector(".copy");
const clear = document.querySelector(".clear");
const uppercase = document.querySelector(".text-uppercase");
const lowercase = document.querySelector(".text-lowercase");
const titlecase = document.querySelector(".text-titlecase");
const sentececase = document.querySelector(".text-sentececase");

let tooltip = document.querySelector(".tooltip");

function getInput() {
  let countWord = subject.value.trim().split(/\s+/).length;
  let countChar = subject.value.split(" ").join("").replaceAll("\n", "").length;
  word.innerHTML = countWord;
  char.innerHTML = countChar;
}

function copyInput() {
  navigator.clipboard.writeText(subject.value);
}

copy.addEventListener("click", function () {
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Copied!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

clear.addEventListener("click", function () {
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Clear!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

uppercase.addEventListener("click", function () {
  subject.value = subject.value.toLocaleUpperCase();
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Uppercase!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

lowercase.addEventListener("click", function () {
  subject.value = subject.value.toLowerCase();
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Lowcase!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

titlecase.addEventListener("click", function () {
  let wordTitle = subject.value.split(" ");
  for (let i = 0; i < wordTitle.length; i++) {
    wordTitle[i] = wordTitle[i][0].toLocaleUpperCase() + wordTitle[i].substr(1);
  }
  wordTitle.join(" ");

  subject.value = wordTitle.join(" ");

  tooltip.classList.add("hide");
  tooltip.innerHTML = "Title!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

sentececase.addEventListener("click", function () {
  let wordCap = subject.value.split(" ");
  for (let i = 0; i < wordCap.length; i++) {
    wordCap[0] = wordCap[i][0].toLocaleUpperCase() + wordCap[i].substr(1);
  }
  wordCap.join(" ");

  subject.value = wordCap.join(" ");
  console.log(wordCap);

  tooltip.classList.add("hide");
  tooltip.innerHTML = "Sentece!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});
