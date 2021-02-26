<template>
  <div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">0</li>
      <li class="glide__slide">1</li>
      <li class="glide__slide">2</li>
    </ul>
  </div>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
  </div>
</div>
</template>

<script>

import Glide from '@glidejs/glide'

export default {
  name: "SliderComment",
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 24,
      autoplay: 2500,
    }).mount();
  },
}
</script>

<style lang="scss">
.glide * {
  box-sizing: inherit;
}
.glide {
  @include media ($screen-tablet) {
    display: none;
  }
  position: relative;
  width: 280px;
  margin: 20px 10px;
  box-sizing: border-box;
  &__track {
    overflow: hidden;
  }
  &__slides {
    position: relative;
    list-style: none;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
    z-index: 1;
  }
  &__slide {
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  &__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  &__arrows {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &__bullets {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &--rtl {
    direction: rtl;
  }
  &--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
}
</style>