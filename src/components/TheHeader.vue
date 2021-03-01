<template>
  <header class="header">
    <div class="header__wrapper-img">
      <img
        class="header__images-bkg"
        src="@/assets/images/header.png"
        alt="logo"
      />
    </div>
    <app-burger-menu></app-burger-menu>
    <nav class="header__nav animate__animated  animate__slideInDown">
      <AppLogo />
      <div class="header__wrapper-menu">
        <ul class="header__menu">
          <li class="header__menu-text">Home</li>
          <li class="header__menu-text">About Us</li>
          <li class="header__menu-text">How it works</li>
          <li class="header__menu-text">Cotegories</li>
          <li class="header__menu-text">Testimony</li>
          <button
            v-on:click="showPopupInfo"
            id="myBtn"
            class="header__button-menu"
          >
            SIGN UP
          </button>
        </ul>
      </div>
    </nav>
    <app-popup @closePopupInfo="closePopup" v-if="isPopupInfo" />
    <div class="header__wrapper">
      <div class="header__box animate__animated animate__fadeInLeftBig">
        <div class="header__subtitle">
          Are you lookong for <a class="header__subtitle--bold">woodden</a>
          <a class="header__subtitle--bold">furniture</a> for your place?
        </div>
        <div class="header__title">This is the Right Place</div>
        <AppButton class="header__button">Explore Furniture</AppButton>
      </div>
    </div>
  </header>
</template>

<script>
import AppBurgerMenu from "./common/AppBurgerMenu.vue";
import AppButton from "./common/AppButton.vue";
import AppLogo from "./common/AppLogo.vue";
import AppPopup from "./common/AppPopup.vue";

export default {
  components: {
    AppButton,
    AppLogo,
    AppBurgerMenu,
    AppPopup,
  },
  name: "TheHeader",
  data() {
    return {
      isPopupInfo: false,
    };
  },
  methods: {
    showPopupInfo() {
      this.isPopupInfo = true;
    },
    closePopup() {
      this.isPopupInfo = false;
    },
  },
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
    @include media($screen-tablet) {
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
    }
    position: absolute;
    right: 0;
    top: 0;
    height: 60vh;
  }
  &__nav {
    @include media($screen-tablet) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1030px;
      margin-top: 20px;
      position: absolute;
    }
    display: none;
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
    transition: 0.2s;
    &:hover {
      border-bottom: solid 1px #daa520;
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
    @include media($screen-tablet) {
      width: 100%;
      max-width: 952px;
      margin-top: 200px;
      position: absolute;
    }
    margin-top: 100px;
    position: absolute;
    width: 90%;
    max-width: 952px;
  }
  &__box {
    @include media($screen-tablet) {
      max-width: 504px;
      display: flex;
      flex-direction: column;
      text-align: start;
    }
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 504px;
    text-shadow: white 1px 1px 0, white 2px 2px 0, white 3px 3px 0,
      white 4px 4px 0, white 5px 5px 0;
  }
  &__subtitle {
    @include media($screen-tablet) {
      max-width: 504px;
      font-size: 36px;
      line-height: 49px;
      margin-bottom: 10px;
      color: #3e3f43;
      &--bold {
        font-weight: bold;
      }
    }
    max-width: 504px;
    font-size: 26px;
    line-height: 49px;
    margin-bottom: 10px;
    color: #3e3f43;
    &--bold {
      font-weight: bold;
    }
  }
  &__title {
    @include media($screen-tablet) {
      font-weight: bold;
      font-size: 72px;
      line-height: 98px;
      margin-bottom: 10px;
    }
    font-weight: bold;
    font-size: 54px;
    line-height: 98px;
    margin-bottom: 10px;
  }
  &__button {
    @include media($screen-tablet) {
      width: 175px;
      margin: 0;
    }
    width: 175px;
    margin: 50px auto;
  }
}
</style>