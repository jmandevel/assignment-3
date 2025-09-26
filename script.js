class Dish {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.favorited = false;
        this.button = document.getElementById(id);
        this.card = this.button.parentElement;
        this.button.addEventListener('click', () => {
            if (this.favorited) {
                this.card.classList.remove("favorited-dish-card");
                this.favorited = false;
            } else {
                this.card.classList.add("favorited-dish-card");
                this.favorited = true;
            }
            updateFavorites();
        });
    }
};

class Resteraunt {
    constructor(name, dishes) {
        this.name = name;
        this.dishes = dishes;
    }
};

let resteraunts = [
    new Resteraunt("Chick-Fil-A", [
        new Dish("cfa-button-0", "Chicken Sandwich", 7.50),
        new Dish("cfa-button-1", "Waffle Fries", 3.00),
        new Dish("cfa-button-2", "Spicey Chicken", 7.50)
    ]),
    new Resteraunt("Wendy's", [
        new Dish("w-button-0", "Baconator", 7.50),
        new Dish("w-button-1", "Salad", 7.50),
        new Dish("w-button-2", "Vanilla Frosty", 3.00)
    ]),
    new Resteraunt("Sheetz", [
        new Dish("s-button-0", "Hot Dog", 7.50),
        new Dish("s-button-1", "Hamburger", 7.50),
        new Dish("s-button-2", "Ice Cream", 3.00)
    ])
];

function updateFavorites() {
    favorites = document.getElementById("favorites");
    while (favorites.lastElementChild) {
        favorites.removeChild(favorites.lastElementChild);
    }
    var favorite_count = 0;
    var total = 0;
    for (resteraunt of resteraunts) {
        for (dish of resteraunt.dishes) {
            if (dish.favorited) {
                favorite_count++;
                total += dish.price;
                var entry = document.createElement("p");
                var entry_text = document.createTextNode(resteraunt.name + " " + dish.name + " $" + dish.price.toFixed(2));
                entry.appendChild(entry_text);
                favorites.appendChild(entry);
            }
        }
    }
    if (favorite_count = 0) {
        var none = document.createElement("p");
        var none_text = document.createTextNode("(none)");
        none.appendChild(none_text);
        favorites.appendChild(none);
    }
    favorites_total = document.getElementById("favorites-total");
    favorites_total.textContent = "$" + total.toFixed(2);
}