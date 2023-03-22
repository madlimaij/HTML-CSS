//separate js files?
//eventhandlers
const handleTabClick = (e) => {
  e.preventDefault();
  document.getElementById(`${e.target.innerText.toLowerCase()}`).style.display = "flex";
  document.getElementById('article').style.display = "none";
  const tabs = Array.from(document.getElementsByClassName('tab'));
  tabs.forEach((tab) => {
    tab.innerText !== e.target.innerText &&
      (document.getElementById(`${tab.innerText.toLowerCase()}`).style.display = "none");
  });
};

const animals = [
  'panther',
  'lion',
  'zebra',
  'crocodile',
  'elephant',
  'rhino',
  'bear',
  'wolf',
  'rabbit',
  'fox',
  'dolphin',
  'cat',
  'dog',
  'monkey',
];

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'gray',
  'pink',
  'brown',
  'orange',
  'beige',
];

const randomPicker = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const addPattern = (randomItem, id) => {
  console.log(randomItem);
  const itemField = document.getElementById(id);
  const randomItemCaseInsensitive = new RegExp(randomItem, 'i');
  itemField.pattern = randomItemCaseInsensitive.source;
};
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

  document.addEventListener('DOMContentLoaded', () => {
    addPattern(randomPicker(animals), 'animal');
    addPattern(randomPicker(colors), 'color');
    addPattern(randomNumber(1, 9), 'number');
  });
  

/* const randomAnimal = randomPicker(animals);
console.log(randomAnimal);

const animalField = document.getElementById('animal');

animalField.pattern = randomAnimal; */
