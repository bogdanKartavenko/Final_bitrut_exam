<template>
  <button
    @click="(e) => $emit('click', e)"
    class="Burger"
    :class="{ _active: active }"
  >
    <span class="Burger__line"></span>
  </button>
</template>

<script>
export default {
  name: "AppBurger",
  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss">
$style: Burger;

.#{$style} {
  position: relative;
  width: 24px;
  height: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &._active {
    .#{$style}__line {
      transform: scaleX(0);
    }
    &::after {
      transform: rotate(-45deg) translate(1px, 5px);
    }
    &::before {
      transform: rotate(45deg) translate(2px, -4px);
    }
  }
  &::before {
    top: 0;
    transform-origin: left top;
  }

  &::after {
    bottom: 0;
    transform-origin: left bottom;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    position: absolute;
    background-color: black;
    transition: transform 0.2s ease;
  }
  &__line {
    display: block;
    width: 24px;
    height: 2px;
    background-color: black;
    transition: transform 0.2s ease;
    transform-origin: center;
  }
}
</style>