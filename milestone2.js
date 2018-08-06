//Code 201: Milestone #2

let firstName = prompt('Enter First Name');
let lastName = prompt('Enter Last Name');
let fullName = firstName + ' '+ lastName;
 

//Menu Items
let cassavaLeaf = '1';
let potatoGreens = '2';
let palmButter = '3';

//Menu Items Price
let cassavaLeafPrice = 20;
let potatoGreensPrice = 15;
let palmButterPrice = 25;

let order = prompt('Choose from the menu:\n\nEnter 1 for Cassava Leaf - $20\n\nEnter 2 for  Potato Greens\n\nEnter 3 Palm Butter\n\n');

if(order == cassavaLeaf) {
    let clUpdate = confirm('Please review your order and click OK to confirm\n\n' + fullName + '\n\nCassava Leaf' + ': ' + '$' + cassavaLeafPrice + '\nTotal: ' + '$' + cassavaLeafPrice);
    let invoice = document.getElementById('orderItem');
    invoice.innerHTML = 'Cassava Leaf ----------------' + ' $' + cassavaLeafPrice;

    let total = document.getElementById('total');
    total.innerHTML = 'Total ------------------------- $' + cassavaLeafPrice;
}
if(order == potatoGreens) {
    let pgUdate = confirm('Please review your order and click OK to confirm\n\n' + fullName + '\n\nPotato Greens' + ': ' + '$' + potatoGreensPrice + '\nTotal: ' + '$' + potatoGreensPrice);
    let invoice = document.getElementById('orderItem');
    invoice.innerHTML = 'Potato Greens ----------------' + ' $' + potatoGreensPrice;

    let total = document.getElementById('total');
    total.innerHTML = 'Total ------------------------- $' + potatoGreensPrice;

}
if(order == palmButter) {
    let pbUdate = confirm('Please review your order and click OK to confirm\n\n' + fullName + '\n\nPalm Butter' + ': ' + '$' + palmButterPrice + '\nTotal: ' + '$' + palmButterPrice);
    let invoice = document.getElementById('orderItem');
    invoice.innerHTML = 'Palm Butter ----------------' + ' $' + palmButterPrice;

    let total = document.getElementById('total');
    total.innerHTML = 'Total ------------------------- $' + palmButterPrice;

}

let orderType = prompt('For here or To-go?');


document.getElementById('hereToGo').innerHTML = 'Order Type --------------- ' + orderType;

document.getElementById('cust').innerHTML = 'Customer: ' + firstName;



