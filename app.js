// ---------------- Inserimento immagini FOREACH da Js - solo 1-5 11-15 21-25 ecc..
/*
let images = [...document.getElementsByClassName("img-slider")];
var i = 12;
images.forEach((immagine, i) =>
{
  i++; //backtick 
  console.log(i);
  immagine.style.backgroundImage = `url(https://picsum.photos/id/2${i}/600/600)`;
   
})*/

// ---------------- Inserimento immagini FOR da Js
/*
let images = [...document.getElementsByClassName("img-slider")];
var j = 403;
for (let i = 0; i < images.length; i++){
  
  images[i].style.backgroundImage = `url(https://picsum.photos/id/${j}/600/600)`;
  j++;
}
*/

// ---------------------- Movimento ---------------------- //

// ----------------- CLICK ARROW
let left = document.getElementById('left');
left.addEventListener('click', function () {

  // text
  textLeft();

  // immagini
  imageLeft();

});

let right = document.getElementById('right');
right.addEventListener('click', function () {

  // text
  textRight();

  // immagini
  imageRight();

});

// ----------------- CLICK ARROW MOBILE
let leftMobile = document.getElementById('leftMobile');
leftMobile.addEventListener('click', function () {

  // text
  textLeft();

  // immagini
  imageLeft();

});

let rightMobile = document.getElementById('rightMobile');
rightMobile.addEventListener('click', function () {

  // text
  textRight();

  // immagini
  imageRight();

});

// ----------------- SCROLL
let sliderScroll = document.getElementById('sliderScroll');
sliderScroll.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (event.wheelDelta > 0) {
    console.log('UP');
    textLeft();
    imageLeft();
  } else {
    console.log('Down');
    textRight();
    imageRight();
  }
}




// ----------------- DRAG

let isDragStart;
let isDragEnd;

let images = [...document.getElementsByClassName("slider")];
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    isDragStart = e.layerX;
  });
  image.addEventListener("dragend", (e) => {
    isDragEnd = e.layerX;
    if (isDragStart > isDragEnd) {
      imageLeft()
      textLeft()
    }
    else {
      imageRight()
      textRight()
    }
  })
})


// ----------------- DRAG - Mobile

images.forEach((image) => {
  image.addEventListener("touchstart", (e) => {
    isDragStart = e.pageX;
  });
  image.addEventListener("touchend", (e) => {
    isDragEnd = e.pageX;
    if (isDragStart > isDragEnd) {
      imageLeft()
      textLeft()
    }
    else {
      imageRight()
      textRight()
    }
  })
})




// ----------------- HASH NAVIGATION
/*function hashChenge() {
 if(location.hash == 'http://127.0.0.1:5500/#img1' )
  console.log(location.hash);
}
*/

let theUrl = window.location.href;



let imageHash = [...document.getElementsByClassName("img-slider")];
// let location0 = "http://127.0.0.1:5500/Monogrid/#0";

// let location1 = window.location.href + "#1"; nope
// da sinistra verso destra #4 #3 #2 #1 #0
if (theUrl == "http://127.0.0.1:5500/Monogrid/#0") {   //image id 14

  displayHashZero();
  console.log(theUrl);
}
else if (theUrl == "http://127.0.0.1:5500/Monogrid/#1") {   //image id 13

  displayHashOne();
}

else if (theUrl == "http://127.0.0.1:5500/Monogrid/#2") {   //image id 12

  // displayHashTwo();
}

else if (theUrl == "http://127.0.0.1:5500/Monogrid/#3") {   //image id 11

  displayHashTree();
}

else if (theUrl == "http://127.0.0.1:5500/Monogrid/#4") {   //image id 10

  displayHashFour();
}

function displayHashTree() {

  imageRight();
  textRight();
}

function displayHashFour() {
  imageRight();
  imageRight();
  textRight();
  textRight();


}

function displayHashOne() {
  imageLeft();
  textLeft();

}
function displayHashZero() {
  imageLeft();
  textLeft();
  imageLeft();
  textLeft();

}


// ---------- listen to key ENTER 
document.body.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    window.location.reload();
  }
});
/*if (window.history) {
  var myOldUrl = window.location.href;
  window.addEventListener('hashchange', function(){
    window.history.pushState({}, null, myOldUrl);
  });
}
*/

// ---------- CURSOR animation
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


// ---------------------- All Functions ---------------------- //

// LEFT 
function imageLeft() {
  let imgSlider = document.getElementsByClassName('slider')[0];
  firstChild = imgSlider.children[0];

  imgSlider.appendChild(firstChild);
}

function textLeft() {
  let textSlider = document.getElementsByClassName('text-slider')[0];
  let firstChild = textSlider.children[0];
  textSlider.appendChild(firstChild);
}


// RIGHT
function imageRight() {
  let imgSliderdestra = document.getElementsByClassName('slider')[0];
  lastChild = imgSliderdestra.children[imgSliderdestra.children.length - 1];
  imgSliderdestra.insertBefore(lastChild, imgSliderdestra.children[0]);
}

function textRight() {
  let textSliderdestra = document.getElementsByClassName('text-slider')[0];
  let lastChild = textSliderdestra.children[textSliderdestra.children.length - 1];
  textSliderdestra.insertBefore(lastChild, textSliderdestra.children[0]);
}