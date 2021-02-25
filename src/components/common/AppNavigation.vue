<template>
  <header class="nav" @click="onOpenSide(null)">
    <app-burger
      :active="visible"
      @click="visible = !visible"
      class="nav__burger"
    />
    <transition enter-active-class="nav-enter" leave-active-class="nav-leave">
      <div v-if="visible" class="nav__container">
        <div class="nav__content">
          <a class="nav__logo" href="">Logo</a>
          <nav class="nav__navigation">
            <ul class="nav__list">
              <the-navigation-item href="/" name="Home" />
              <the-navigation-item @click.stop="onOpenSide(1)" name="Shop">
                <ul v-if="openSide === 1" class="nav__side" @click.stop>
                  <the-navigation-item href="/" name="Shop 1" />
                  <the-navigation-item href="/" name="Shop 2" />
                  <the-navigation-item href="/" name="Shop 3" />
                </ul>
              </the-navigation-item>
              <the-navigation-item @click.stop="onOpenSide(2)" name="Shop 4">
                <ul v-if="openSide === 2" class="nav__side" @click.stop>
                  <the-navigation-item href="/" name="Shop 5" />
                  <the-navigation-item href="/" name="Shop 6" />
                  <the-navigation-item href="/" name="Shop 7" />
                </ul>
              </the-navigation-item>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import TheNavigationItem from "./TheNavigationItem";
import AppBurger from "./AppBurger.vue";

export default {
  name: "TheNavigation",
  components: {
    TheNavigationItem,
    AppBurger,
  },
  data() {
    return {
      visible: false,
      openSide: null,
    };
  },
  methods: {
    onOpenSide(n) {
      console.log(n);
      this.openSide = n;
    },
  },
};
</script>

<style lang="scss">
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
    width: 50vw;
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
    width: 50vw;
  }
}
.nav-leave {
  animation: navLeave 0.4s ease;
}
.nav-enter {
  animation: navEnter 0.4s ease;
}
.nav {
  &__logo {
    display: inline-block;
    color: white;
    margin-bottom: 24px;
  }
  &__burger {
    top: 24px;
    left: 24px;
    position: fixed;
    z-index: 11;
  }
  &__container {
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    width: 50vw;
    position: fixed;
    background-color: purple;
    overflow: hidden;
  }
  &__content {
    padding: 64px 32px 24px;
  }
  &__link {
    color: white;
    white-space: nowrap;
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  &__side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: calc(100% + 24px);
    animation: fromLeft 0.4s ease;
  }
}
</style>