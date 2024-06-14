let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];


// HERE WE USE HIGHER ORDER FUNCTION(<--forEach()---->) TO ITREATE OVER THE ARRAY OF THE OBJECT.
displayData(user)
function displayData(user){
    
user.forEach((user) => {
    let container = document.getElementById("container")

    let card = document.createElement("div")

    let id = document.createElement("h1");
    id.textContent = user.id;

    let name = document.createElement("b");
    name.textContent = user.name;

    let username = document.createElement("p");
    username.textContent = user.username;

    let email = document.createElement("p");
    email.textContent = user.email;

    let btn = document.createElement("button")
    btn.textContent = "ADD TO CART";
    btn.style.margin = "0% 0% 5% 30%";
    btn.style.fontSize = "20px";
    btn.style.borderRadius = "10px";
    btn.style.color = "blue";
    btn.style.backgroundColor = "pink";
    btn.addEventListener("click", function () {
        addToCart(user)
    })

    card.append(id, name, username, email, btn);
    container.append(card)


})
}
let cart_Data = JSON.parse(localStorage.getItem("cart-data")) || []
function addToCart(user) {
    cart_Data.push(user)
    localStorage.setItem("cart-data", JSON.stringify(cart_Data))
}