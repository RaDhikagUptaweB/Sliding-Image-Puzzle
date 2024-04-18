//Initial References
const moves = document.getElementById("moves");
const container = document.querySelector(".container");
const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
let currentElement = "";
let movesCount,
  imagesArr = [];
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops ad throw error)
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};