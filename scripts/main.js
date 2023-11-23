const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/school.jpg") {
    myImage.setAttribute("src", "images/school2.jpg");
  } else {
    myImage.setAttribute("src", "images/school.jpg");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Don\'t Go To School: ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Don\'t Go To School: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}