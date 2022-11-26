"use strict";
// gọi hàm

const more1 = document.querySelector(".more1");
const more2 = document.querySelector(".more2");
const more3 = document.querySelector(".more3");
const more4 = document.querySelector(".more4");
const more5 = document.querySelector(".more5");
const more6 = document.querySelector(".more6");
//
const menuEx1 = document.querySelector(".menu-ex1");
const menuEx2 = document.querySelector(".menu-ex2");
const menuAct1 = document.querySelector(".menu-act1");
const menuAct2 = document.querySelector(".menu-act2");
const menuLearn1 = document.querySelector(".menu-learn1");
const menuLearn2 = document.querySelector(".menu-learn2");
const skill = document.querySelector(".skill");
const laguage = document.querySelector(".laguage");
const hobby = document.querySelector(".hobby");
//
const less1 = document.querySelector(".less1");
const less2 = document.querySelector(".less2");
const less3 = document.querySelector(".less3");
const less4 = document.querySelector(".less4");
const less5 = document.querySelector(".less5");
const less6 = document.querySelector(".less6");
// check email
const regex = /^\w+@[a-zA-Z]{3,}\.com$/i;
const btnCheck = document.querySelector(".check");
const thongtin = document.querySelector(".container-thongtin");
const verify = document.querySelector(".container-verify");
//
const checkEmail = function () {
  const Email = document.getElementById("txt-email").value;
  if (Email == "" || Email == null) {
    document.querySelector(".error").textContent = "Không được để trống";
  } else if (!regex.test(Email)) {
    document.querySelector(".error").textContent = "Email nhập chưa hợp lệ";
  } else {
    thongtin.classList.remove("hidden");
    verify.classList.add("hidden");
  }
};
btnCheck.addEventListener("click", checkEmail);
// ---------------------------------------------------------
// hiện thông tin
less1.classList.add("hidden");
less1.classList.remove("view-less");
//
less2.classList.add("hidden");
less2.classList.remove("view-less");
//
less3.classList.add("hidden");
less3.classList.remove("view-less");
//
less4.classList.add("hidden");
less4.classList.remove("view-less");
//
less5.classList.add("hidden");
less5.classList.remove("view-less");
//
less6.classList.add("hidden");
less6.classList.remove("view-less");
// Kinh nghiem
const viewMore1 = function () {
  menuEx1.classList.remove("hidden");
  menuEx2.classList.remove("hidden");
  less1.classList.add("view-less");
  less1.classList.remove("hidden");
  more1.classList.add("hidden");
};
more1.addEventListener("click", viewMore1);
// hoat dong
const viewMore2 = function () {
  menuAct1.classList.remove("hidden");
  menuAct2.classList.remove("hidden");
  less2.classList.add("view-less");
  less2.classList.remove("hidden");
  more2.classList.add("hidden");
};
more2.addEventListener("click", viewMore2);
// hoc van
const viewMore3 = function () {
  menuLearn1.classList.remove("hidden");
  menuLearn2.classList.remove("hidden");
  less3.classList.add("view-less");
  less3.classList.remove("hidden");
  more3.classList.add("hidden");
};
more3.addEventListener("click", viewMore3);
// ky nang
const viewMore4 = function () {
  skill.classList.remove("hidden");
  less4.classList.add("view-less");
  less4.classList.remove("hidden");
  more4.classList.add("hidden");
};
more4.addEventListener("click", viewMore4);
// Ngon Ngu
const viewMore5 = function () {
  laguage.classList.remove("hidden");
  less5.classList.add("view-less");
  less5.classList.remove("hidden");
  more5.classList.add("hidden");
};
more5.addEventListener("click", viewMore5);
// Sở Thích
const viewMore6 = function () {
  hobby.classList.remove("hidden");
  less6.classList.add("view-less");
  less6.classList.remove("hidden");
  more6.classList.add("hidden");
};
more6.addEventListener("click", viewMore6);
// An thong tin
// Kinh nghiem
const viewLess1 = function () {
  menuEx1.classList.add("hidden");
  menuEx2.classList.add("hidden");
  less1.classList.add("hidden");
  more1.classList.remove("hidden");
};
less1.addEventListener("click", viewLess1);
// hoat dong
const viewLess2 = function () {
  menuAct1.classList.add("hidden");
  menuAct2.classList.add("hidden");
  less2.classList.add("hidden");
  more2.classList.remove("hidden");
};
less2.addEventListener("click", viewLess2);
// hoc van
const viewLess3 = function () {
  menuLearn1.classList.add("hidden");
  menuLearn2.classList.add("hidden");
  less3.classList.add("hidden");
  more3.classList.remove("hidden");
};
less3.addEventListener("click", viewLess3);
// ky nang
const viewLess4 = function () {
  skill.classList.add("hidden");

  less4.classList.add("hidden");
  more4.classList.remove("hidden");
};
less4.addEventListener("click", viewLess4);
// Ngon Ngu
const viewLess5 = function () {
  laguage.classList.add("hidden");

  less5.classList.add("hidden");
  more5.classList.remove("hidden");
};
less5.addEventListener("click", viewLess5);
// Sở Thích
const viewLess6 = function () {
  hobby.classList.add("hidden");

  less6.classList.add("hidden");
  more6.classList.remove("hidden");
};
less6.addEventListener("click", viewLess6);
