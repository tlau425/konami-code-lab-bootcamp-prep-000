const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let i=0;
  document.addEventListener('keydown', (e) => {
    let key = e.key;
    var requiredCode = codes[i];
    if (key == requiredCode) {
        i++;
    } else {
      i = 0;
    }

    if (i == codes.length) {
      alert('hurray');
      console.log("IT WORKED")
      i = 0;
    }
  }
)}
