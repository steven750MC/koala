// ====== ساخت کارت‌ها ======

// فرض کن یه لیست از کالاها داریم
let products = [
  { name: "کالای اول", price: 10000 },
  { name: "کالای دوم", price: 20000 },
  { name: "کالای سوم", price: 15000 },
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
