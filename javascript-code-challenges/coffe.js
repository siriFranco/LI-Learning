// String concatenation
"I ordered " + "numCoffee" + " coffee."

function coffeeDate(coffeeArr){
    let coffeeSum = coffeeArr.reduce(
        (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
    );
    return `The total bill is ${coffeeSum * 1.25}`;
}

// Template strings
console.log(coffeeDate([2,5,7,1,4]));

//-------menu --------------
function foodFestival(menus){
    let flatMenus = menus.flat();

    let combinedMenu = new Set();
    flatMenus.forEach(item => {
        combinedMenu.add(item);
    });
    const menuNode = document.querySelector("#combined-menu");
    for(let item of combinedMenu){
        let foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    }
}

foodFestival([["cupcakes", "muffin"], ["cupcakes", "chocolate cake"],["chocoflan"],["chocolate cake"]] );