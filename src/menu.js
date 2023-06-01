function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    menu.appendChild(createMenuItem("Pancakes",
    "Two buttermilk pancakes, two eggs your way and a side of breakfast meat" ));

    menu.appendChild(createMenuItem("French Toast",
    "Sliced brioche stuffed with sweet cream cheese glaze, topped with chocolate, strawberries, toasted coconut flakes, vanilla anglaise"));

    menu.appendChild(createMenuItem("Waffles", 
    "Fluffy, sugar dusted waffle served with whipped butter."));

    menu.appendChild(createMenuItem("Classic Breakfast", 
    "Two eggs your way, a side of breakfast meat, breakfast potatoes and your choice of baked good"));

    menu.appendChild(createMenuItem("Egg Benedict", 
    "Canadian bacon and two poached eggs over a toasted english muffin served with hollandaise sauce."));

    menu.appendChild(createMenuItem("Biscuits and Gravy",
    "Two buttermilk biscuits smothered in sausage gravy" ));

    menu.appendChild(createMenuItem("Breakfast Sandwich", 
    "English muffin filled with egg, your choice of cheese, and your choice of breakfast meat."));

    menu.appendChild(createMenuItem("Breakfast Tacos", 
    "3 flour or corn tortillas filled with scrambled eggs, potatoes and cheese. Served with salsa."));

    menu.appendChild(createMenuItem("Migas",
    "Eggs scrambled with tortilla strips, jalapenos, chorizo, onions, tomatoes, cheese and avocado. Served with black beans and a side of tortillas."));

    return menu;
};

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
};

function loadMenu() {
    const main = document.getElementById("main");

    main.appendChild(createMenu());
};
  
  export default loadMenu;
   
