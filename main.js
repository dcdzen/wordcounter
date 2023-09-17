function getInput() {
  const word = document.getElementById("word");
  const char = document.getElementById("char");

  let subject = document.getElementById("subject");

  let countWord = subject.value.trim().split(/\s+/).length;
  let countChar = subject.value.split(" ").join("").replaceAll("\n", "").length;
  word.innerHTML = countWord;
  char.innerHTML = countChar;

  console.log(countWord);
}

function copyInput() {
  subject.select();
  navigator.clipboard.writeText(subject.value);

  // Alert the copied text
  alert("Copied the text: " + subject.value);
}
