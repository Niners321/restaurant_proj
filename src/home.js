import loadMenu from "./menu";
import loadContact from "./contact";

function createHomePage() {
    const header = document.createElement('div');
    header.classList.add('header-container')

    const coffeeImage = document.createElement('img');
    coffeeImage.classList.add('coffee-img');
    coffeeImage.src = 'coffee.jpg';
    coffeeImage.altg = 'coffee cup';

    const dinerTitle = document.createElement('H1');
    dinerTitle.innerText = "Dina's Diner";

    const summary = document.createElement('p');
    summary.innerText = "Dina's Diner was established in 1952 when Dina became an empty nester and missed being able to cook delicious meals for more than just her and her husband. Dina's Diner has been a pillar of this small town and you will not find any finer food."

    header.appendChild(coffeeImage);
    header.appendChild(dinerTitle);
    header.appendChild(summary);
    
   return header;
};


function createNav() {

    const nav = document.createElement('div');
    
    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

  function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }


function loadHome() {
    const home = document.getElementById("header");

    home.appendChild(createHomePage());

};

function loadNav() {
    const nav = document.getElementById("nav");

    nav.appendChild(createNav());
    return nav
};


function initializeWebsite() {
    const content = document.getElementById("content");
    
    content.appendChild(createMain());

    loadNav();
    loadHome();
  }


  export default initializeWebsite;


