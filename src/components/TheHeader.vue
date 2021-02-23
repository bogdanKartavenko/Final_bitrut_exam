<template>
  <header class="header">
    <div class="header__wrapper-img">
      <img
        class="header__images-bkg"
        src="@/assets/images/header.png"
        alt="logo"
      />
    </div>
    <nav class="header__nav">
      <AppLogo></AppLogo>
      <div class="header__wrapper-menu">
        <ul class="header__menu">
          <li class="header__menu-text">Home</li>
          <li class="header__menu-text">About Us</li>
          <li class="header__menu-text">How it works</li>
          <li class="header__menu-text">Cotegories</li>
          <li class="header__menu-text">Testimony</li>
          <button id="myBtn" class="header__button-menu">SIGN UP</button>
        </ul>
      </div>
    </nav>
    <div class="header__wrapper">
      <div class="header__box">
        <div class="header__subtitle">
          Are you lookong for <a class="header__subtitle--bold">woodden</a>
          <a class="header__subtitle--bold">furniture</a> for your place?
        </div>
        <div class="header__title">This is the Right Place</div>
        <AppButton class="header__button">Explore Furniture</AppButton>
      </div>
    </div>
    <div id="navPopup" class="popup">
      <div class="popup__body">
        <div class="popup__content">
          <a id="popupClose" class="popup__close">X</a>
          <div class="popup__title">Login</div>
          <input class="popup__input" type="login" placeholder="Username" />
          <input class="popup__input" type="password" placeholder="Password" />
          <button class="popup__button button">Done</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppButton from "./common/AppButton.vue";
import AppLogo from "./common/AppLogo.vue";

export default {
  components: {
    AppButton,
    AppLogo,
  },
  name: "TheHeader",
};
</script>

<style lang="scss">
.header {
  color: #3e3f43;
  @include flex(flex-start, center, column);
  width: 100%;
  min-height: 100vh;
  &__wrapper-img {
    position: relative;
    width: 100%;
  }
  &__images-bkg {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
  }
  &__nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1030px;
    margin-top: 20px;
    position: absolute;
  }
  &__wrapper-menu {
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 737px;
  }
  &__menu {
    width: 737px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__menu-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 1px #daa520;
      color: #daa520;
      transition: 0.2s;
    }
  }
  &__button-menu {
    width: 137px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffff;
    border-radius: 5px;
    border: 1px solid;
    font-size: 14px;
    font-weight: 800;
    font-family: Nunito;
    cursor: pointer;
    transition: 1s;
    &:hover {
      background: #f9bdbd;
    }
  }
  &__wrapper {
    width: 60%;
    height: 376px;
    margin-top: 200px;
    position: absolute;
    width: 100%;
    max-width: 952px;
  }
  &__box {
    max-width: 504px;
    height: 376px;
  }
  &__subtitle {
    max-width: 504px;
    // height: 98px;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 10px;
    color: #3e3f43;
    &--bold {
      font-weight: bold;
    }
  }
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 98px;
    margin-bottom: 10px;
  }
  &__button {
    width: 175px;
  }
}
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  display: none;
  &__input {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #e9eff6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;
  }
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
  }
  &:target {
    opacity: 1;
    visibility: visible;
  }
  &__body {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 15px;
  }
  &__content {
    background-color: #ffff;
    color: #3e3f43;
    max-width: 800px;
    padding: 15px;
    position: relative;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-direction: 0.4s;
    border-radius: 5px;
    border: 3px solid#daa520;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__close {
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 5px;
    right: 10px;
    &:hover,
    &:focus {
      color: #daa520;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>

// methods: { // const popup = document.getElementById("navPopup"), //
popupToggle = document.getElementById("myBtn"), // popupClose =
document.getElementById("popupClose"); // popupToggle.onclick = function() { //
popup.style.display = "block"; // }; // popupClose.onclick = function() { //
popup.style.display = "none"; // }; // window.onclick = function(event) { // if
(event.target == popup) { // popup.style.display = "none"; // } // }; // }
