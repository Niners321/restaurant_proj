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


function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createHomePage());
    return main
  };

  export default loadHome;
