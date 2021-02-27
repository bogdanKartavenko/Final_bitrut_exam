<template>
  <div class="glide slide">
    <div class="glide__track slide__track" data-glide-el="track">
      <ul class="glide__slides slide__slides">
        <li class="glide__slide">
          <div class="slide__wrapper">
            <div class="testimony__card">
              <div class="testimony__wrapper-text">
                My experience with WOODIES is a complete success, from customed
                furniture, range of product, modern design, purchasing
                experience, the delivery and newsletter. Litterally everything
                is great. Thank you!
              </div>
              <div class="testimony__wrapper-accaunt">
                <img
                  class="tistimony__img-account"
                  src="@/assets/images/Mask_Group.png"
                  alt="img"
                />
                <div class="testimony__wrapper-name">
                  <div>Sandra Dewi</div>
                  <div>Jakarta Selatan</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="testimony__card">
            <div class="testimony__wrapper-text">
              curabitur gravida arcu ac tortor
            </div>
            <div class="testimony__wrapper-accaunt">
              <img
                class="tistimony__img-account"
                src="@/assets/images/Mask_Group.png"
                alt="img"
              />
              <div class="testimony__wrapper-name">
                <div>Elena Mozgovaya</div>
                <div>New York</div>
              </div>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="testimony__card">
            <div class="testimony__wrapper-text">
              ultrices dui sapien eget mi proin sed libero enim sed faucibus
              turpis in eu mi bibendum
            </div>
            <div class="testimony__wrapper-accaunt">
              <img
                class="tistimony__img-account"
                src="@/assets/images/Mask_Group.png"
                alt="img"
              />
              <div class="testimony__wrapper-name">
                <div>Jon Smitt</div>
                <div>Dakota</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        &#8592; Previous
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        Next &#8594;
      </button>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

export default {
  name: "SlideComment",
  mounted() {
    new Glide(".slide", {
      type: "carousel",
      startAt: 0,
      gap: 24,
      autoplay: 4000,
    }).mount();
  },
};
</script>

<style lang="scss" scoped>
.glide * {
  box-sizing: inherit;
}
.glide {
  @include media ($screen-tablet) {
width: 384px;
// display: block
  }
  position: relative;
  width: 300px;
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
    justify-content: center;
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
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: #c4c4c4;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    &:hover {
      color: #3e3f43;
    }
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
.slide__wrapper {
  @include media($screen-tablet) {
    width: 384px;
  }
  width: 300px;
}
</style>