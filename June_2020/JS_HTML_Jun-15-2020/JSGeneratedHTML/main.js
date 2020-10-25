let bodyElement = document.body;
//The document.createElement() method create html elements specified by tagName
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');

//The ClassName property gets and sets the value of the class attribute of the spefified element
cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageElement.className = "image";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";

//Works the same way as the className property except it sets the source of the imageElement
imageElement.src = "https://source.unsplash.com/random";

// This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value
btnElement.setAttribute("href", "#");
imageElement.setAttribute("alt", "Image from Unsplash");

headingElement.innerText = "Unsplash API";
paragraphElement.innerText = "This sets the value of an attribute specified element. If exists then will be updated.";
btnElement.innerText = "Learn more";

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageElement);
infoContainer.append(headingElement, paragraphElement, btnElement);