<template>
  <div class="nav">
    <div class="nav__wrapper">
      <app-logo class="nav__logo"></app-logo>
      <button @click="visible = !visible" v- class="nav__button">
        <span class="nav__button-lines first"></span>
        <span class="nav__button-lines second"></span>
        <span class="nav__button-lines third"></span>
      </button>
    </div>
    <div v-show="visible" class="nav__box">
      <nav class="nav__navigation">
        <ul class="nav__list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Testimony</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import AppLogo from "./AppLogo.vue";
export default {
  components: { AppLogo },
  name: "AppBurgerMenu",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">
.nav {
  @include media($screen-tablet) {
    display: flex;
  }
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  &__wrapper {
    display: flex;
  }
  &__logo {
    position: absolute;
    left: 15px;
    top: 15px;
  }
  &__list {
    position: relative;
    z-index: 200;
    font-size: 26px;
    line-height: 49px;
    font-weight: bold;
    color: #3e3f43;
    background-color: #daa520;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
    animation-name: nav ;

  }
  &__button {
    
    // z-index: 1020;
    cursor: pointer;
    @include size(30px);
    position: absolute;
    right: 15px;
    top: 15px;
    border-radius: 20%;
  }
  &__button-lines {
    transition: all 0.7s ease;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: white;
    margin-bottom: 10px;
    &:nth-child(1) {
      top: 5px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: -5px;
    }
    .first {
      transform: rotate(45deg) translateX(7px) translateY(10px);
    }
    .lineCenter {
      opacity: 0;
    }
    .lineBottom {
      transform: rotate(-45deg) translateX(7px) translateY(-10px);
    }
  }
  @keyframes nav {
  0% {
    left: 0%;
  }
  100% {
    right: 100%;
  }
}
}
</style>