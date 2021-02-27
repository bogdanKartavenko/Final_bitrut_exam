<template>
  <div class="nav">
    <div class="nav__wrapper">
      <app-logo class="nav__logo"></app-logo>
      <button :active="visible" @click="visible = !visible" class="nav__button">
        <span :class="{ top: visible }" class="nav__lines"></span>
        <span :class="{ center: visible }" class="nav__lines"></span>
        <span :class="{ bottom: visible }" class="nav__lines"></span>
      </button>
    </div>
    <transition enter-active-class="nav-enter" leave-active-class="nav-leave">
      <div v-show="visible" class="nav__container">
        <nav class="nav__navigation">
          <ul class="nav__list">
            <li class="nav__text">
              <span href="">Home</span>
            </li>
            <li class="nav__text">
              <span href="">About</span>
            </li>
            <li class="nav__text">
              <span href="">Work</span>
            </li>
            <li class="nav__text">
              <span href="">Categories</span>
            </li>
            <li class="nav__text">
              <span href="">Testimony</span>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
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
      openSide: null,
    };
  },
};
</script>

<style lang="scss">
.nav {
  @include media($screen-tablet) {
    display: none;
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
    // background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
  }
  &__button {
    z-index: 1020;
    cursor: pointer;
    @include size(30px);
    position: absolute;
    right: 15px;
    top: 15px;
    border-radius: 20%;
  }
  &__lines {
    transition: all 0.7s ease;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: white;
    margin-bottom: 10px;
    z-index: 1100;
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
  }
  &__container {
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 1000;
    width: 100vw;
    position: fixed;
    background-color: #f9bdbd;
    overflow: hidden;
  }

  .nav-leave {
    animation: navLeave 0.4s ease;
  }
  .nav-enter {
    animation: navEnter 0.4s ease;
  }
  @keyframes fromLeft {
    from {
      transform: translateX(400%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes navLeave {
    from {
      width: 100vw;
    }
    to {
      width: 0px;
    }
  }

  @keyframes navEnter {
    from {
      width: 0;
    }
    to {
      width: 100vw;
    }
  }
}
.top {
  width: 55%;
 transform: translateX(16px) translateY(4px) rotate(45deg);
}
.bottom {
  width: 55%;
  transform: translateX(16px) translateY(-4px) rotate(-45deg);
}
</style>