"use strict"; 
let price = window.prompt("合計金額を入力して下さい。");
let name =window.prompt("ユーザー名を入力してください。");
const tax =1.10;
let totalPrice = price*tax ;
let priceAfter = Math.floor(totalPrice);

alert(`${name}さんの合計金額は${priceAfter}円です`);
