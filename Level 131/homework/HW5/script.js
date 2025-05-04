"use strict";

// მაგალითი 1: this-ის მნიშვნელობა ფუნქციაში
function checkThis() {
  console.log("this ფუნქციაში:", this);
}

// ჩვეულებრივ რეჟიმში this იქნებოდა window
// strict mode-ში this არის undefined
checkThis();

// მაგალითი 2: ფუნქციის გამოძახება სწორი რაოდენობის არგუმენტებით
function greet(name) {
  console.log("გამარჯობა, " + name);
}

// strict mode უფრო მკაცრია არგუმენტების მიმართ
greet("nino");
console.log("მაგალითი 2: ფუნქციის გამოძახება სწორი რაოდენობის არგუმენტებით");

// მაგალითი 3: ფუნქციის გამოცხადება სწორი სინტაქსით
function calculateSum(a, b) {
  // strict mode-ში ფუნქციის შიგნით ფუნქციის გამოცხადება უნდა იყოს სწორი სინტაქსით
  function add(x, y) {
    return x + y;
  }

  return add(a, b);
}

let result = calculateSum(5, 10);
console.log("მაგალითი 3: ფუნქციის შედეგი:", result);
