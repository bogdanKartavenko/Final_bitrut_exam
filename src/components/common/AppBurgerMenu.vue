<template>
  <div class="nav">
    <app-logo></app-logo>
    <button @click="visible = !visible" v- class="nav__button">
      <span class="nav__button-lines first"></span>
      <span class="nav__button-lines second"></span>
      <span class="nav__button-lines third"></span>
    </button>
    <div v-show="visible" class="nav__box">
      <nav class="nav__navigation">
        <ul>
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
  &__button {
    background-color: black;
    z-index: 1020;
    margin-top: 10px;
    cursor: pointer;
    @include size(36px);
    position: absolute;
  }
  &__button-lines {
    transition: all 0.7s ease;
    position: absolute;
    width: 36px;
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
}
</style>