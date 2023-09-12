//stores inventory with prices in USD
const inventory={
    item1 : 10,
    item2 : 20,
    item3 : 15,
};

//exchange rate : 1 USD=80 INR
const exchangeRate=80; 

//function to convert prices from USD to INR
function convertToINR(priceInUSD){
    return priceInUSD*exchangeRate;
}

//use the map function to create a new object with prices in INR
const inventoryInINR={};
for(const item in inventory){
    if(inventory.hasOwnProperty(item)){
        const priceInUSD=inventory[item];
        const priceInINR=convertToINR(priceInUSD);
        inventoryInINR[item]=priceInINR;
    }
}
console.log("Inventory in INR:",inventoryInINR);