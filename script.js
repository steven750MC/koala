// ====== ساخت کارت‌ها ======

// فرض کن یه لیست از کالاها داریم
let products = [
{ name: "او اچ ۴۷ کیوا", price: 2500000 },
{ name: "سی اچ ۴۷ تیکون", price: 38000000 },
{ name: "ام ای ۲۴ هیند", price: 5000000 },
{ name: "ناو کلاس آره‌لی برک", price: 1800000000 },
{ name: "ناو کلاس نیمیتز", price: 4500000000 },
{ name: "ناو کلاس زوموالت", price: 3500000000 },
{ name: "ناو کلاس تیکوندرگا", price: 1500000000 },
{ name: "اِگیس", price: 1000000000 },
{ name: "استرینگر", price: 38000 },
{ name: "پارتیت", price: 3000000 },
{ name: "نیسم", price: 1500000 },
{ name: "موشک تاماهاک", price: 1500000 },
{ name: "موشک جاولین", price: 175000 },
{ name: "موشک اسکاد", price: 1000000 },
{ name: "موشک هوا به هوا", price: 400000 },
{ name: "پالایشگاه نفت", price: 5000000000 },
{ name: "پالایشگاه گاز", price: 3000000000 },
{ name: "معدن طلا", price: 1000000000 },
{ name: "مزرعه گندم", price: 500000 },
];

// گرفتن المنت بخش نمایش کارت‌ها و بخش لیست قیمت‌ها
let cardContainer = document.getElementById("cardContainer");
let priceList = document.getElementById("priceList");
let totalPriceElement = document.getElementById("totalPrice");

let total = 0;

// تابع نمایش کارت‌ها
function showCards() {
  products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("name");
    nameSpan.innerText = product.name;

    let priceSpan = document.createElement("span");
    priceSpan.classList.add("price");
    priceSpan.innerText = product.price + "$";

    // کنار هم قرار دادن name و price
    card.appendChild(nameSpan);
    card.appendChild(priceSpan);

    // اضافه کردن رویداد کلیک به کارت
    card.onclick = function () {
      let item = document.createElement("p");
      item.innerText = product.name + " - " + product.price + " دلار";
      priceList.appendChild(item);

      total += product.price;
      totalPriceElement.innerText = "مجموع: " + total + " دلار";
    };

    cardContainer.appendChild(card);
  });
}

// فراخوانی تابع
showCards();
