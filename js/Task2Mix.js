var mouse
var keyboard
var headphone
var usb
var watch

var cem = Number(0)
var sum = Number(0)

const product = [mouse, keyboard, headphone, usb, watch]

var products = [
    {
        prodName: mouse,
        prodId:Number (3),
        price: Number (45),
    },
    {
        prodName: keyboard,
        prodId: Number (13),
        price: Number (35),
    },
    {
        prodName: headphone,
        prodId: Number (12),
        price: Number (55),
    },
    {
        prodName: usb,
        prodId: Number (4),
        price: Number (20),
    },
    {
        prodName: watch,
        prodId: Number (5),
        price: Number (333)
    }
]

for (i = 0; i < products.length; i++) {
    if (products[i].prodId % 2 != 0) {
        cem++
        sum = sum + products[i].price
        console.log(sum / cem);
    }
}
