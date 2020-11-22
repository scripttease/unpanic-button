// Constants

let images = [
  "https://source.unsplash.com/featured/?nature",
  "https://source.unsplash.com/featured/?peace",
  "https://source.unsplash.com/featured/?calm",
  "https://source.unsplash.com/featured/?cute",
  "https://source.unsplash.com/featured/?cute,funny",
  "https://source.unsplash.com/featured/?amazing",
  "https://source.unsplash.com/featured/?relaxing",
  "https://source.unsplash.com/featured/?fluffy",
  "https://source.unsplash.com/featured/?satisfying",
  "https://source.unsplash.com/featured/?garden",
  "https://source.unsplash.com/featured/?lake",
  "https://source.unsplash.com/featured/?stream",
  "https://source.unsplash.com/featured/?mountain",
  "https://source.unsplash.com/featured/?nature,underwater,ocean",
  "https://source.unsplash.com/featured/?nature,jellyfish,ocean",
  "https://source.unsplash.com/featured/?nature,octopus,ocean",
];

// Functions

let getRandom = (array) => array[Math.floor(Math.random() * array.length)];

let text = (content) => document.createTextNode(content);

let element = (
  tag = "div",
  attributes = {},
  eventHandlers = {},
  children = []
) => {
  let el = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) =>
    el.setAttribute(key, value)
  );
  Object.entries(eventHandlers).forEach(([key, value]) =>
    el.addEventListener(key, value)
  );
  children.forEach((child) => el.appendChild(child));
  return el;
};

let removeElement = (event) => {
  if (event.target === event.currentTarget) {
    event.target.remove();
  }
};

let openModal = () => {
  let randomWords = ["Squid", "Nautilus", "Cephalopod", "Octopus"]
  let arrayLength = randomWords.length;
  let randomIndex = Math.floor(Math.random() * arrayLength);
  let randomAdjectives = ["Glorius", "Intrepid", "Curious", "Dashing"]
  let adjectiveArrayLength = randomAdjectives.length;
  let randomAdjectiveIndex = Math.floor(Math.random() * adjectiveArrayLength);
  let paragraph = document.getElementById("p");
  // let text = document.createTextNode("This just got added");
  let image = getRandom(images);
  let modal = element(
    "div",
    { class: "nice-button-modal" },
    { click: removeElement },
    [element("p", { id: "p1" }), element("img", { src: image }), element("p", { id: "p2" })]
  )
  document.querySelector(".nice-button-container").appendChild(modal);
  document.getElementById("p1").innerHTML = "You've Got This!";
  document.getElementById("p2").innerHTML = "You " + randomAdjectives[randomAdjectiveIndex] + " " + randomWords[randomIndex] + "!";
};

// Execute

document.querySelector(".nice-button").addEventListener("click", openModal);
