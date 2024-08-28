'use strict';

const page = document.documentElement;
const switcher = page.querySelector('.theme-switcher');

const topBarIconCall = page.querySelector('.top-bar__icon-call');
const topBarIconBurger = page.querySelector('.top-bar__icon-burger');
const topBarIconClose = page.querySelector('.top-bar__icon-close');
const headerLogo = page.querySelector('.header__logo');
const menuLogo = document.querySelector('.menu .header__logo');

const contactInputName = document.querySelector('.contacts__input-name')
const contactInputEmail = document.querySelector('.contacts__input-email')
const contactInputTextArea = document.querySelector('.contacts__input-textarea')

const phoneIconDark = require("../image/Icon-Phone-call-dark.png");
const phoneIconLight = require("../image/Icon-Phone-call.png");

const burgerIconDark = require("../image/Icon-Burger-menu-dark.png");
const burgerIconLight = require("../image/Icon-Burger-menu.png");

const closeIconDark = require("../image/Icon-Close-dark.png");
const closeIconLight = require("../image_js/Icon-Close.png");

const headerLogoDark = require("../image/header-logo-dark.png");
const headerLogoLight = require("../image/header-logo.png");

switcher.addEventListener('click', () => {
  if(page.classList.contains('page--dark')) {
    page.classList.remove('page--dark');
    switcher.classList.remove('switcher--dark');
    topBarIconCall.src = phoneIconLight;
    topBarIconBurger.src = burgerIconLight;
    topBarIconClose.src = closeIconLight;
    headerLogo.src = headerLogoLight;
    menuLogo.src = headerLogoLight;
  } else {
    page.classList.add('page--dark');
    switcher.classList.add('switcher--dark');
    topBarIconCall.src = phoneIconDark;
    topBarIconBurger.src = burgerIconDark;
    topBarIconClose.src = closeIconDark;
    headerLogo.src = headerLogoDark;
    menuLogo.src = headerLogoDark;
    contactInputName.style = 'color: rgb(50, 126, 131)'
    contactInputEmail.style = 'color: rgb(50, 126, 131)'
    contactInputTextArea.style = 'color: rgb(50, 126, 131)'
  }
});
