"use strict"; 
let price = window.prompt("合計金額を入力して下さい。");
let name =window.prompt("ユーザー名を入力してください。");
const tax =1.10;

alert(`${name}さんの合計金額は${price*tax}円です`)
