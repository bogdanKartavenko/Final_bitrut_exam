<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <app-card
          class="glide__slide"
          v-for="card in cards"
          :key="card.title"
          :image="card.image"
          :title="card.title"
          :color="card.color"
          :align="card.align"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import AppCard from "@/components/common/AppCard.vue";

export default {
  components: { AppCard },
  name: "AppSlider",
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 24,
      autoplay: 2500,
    }).mount();
  },
  data() {
    return {
      cards: [
        {
          title: "Desk",
          image: require("@/assets/images/desk.png"),
          color: "#F9BDBD",
          align: "flex-start",
        },
        {
          title: "Chair",
          image: require("@/assets/images/chair.png"),
          color: "#F7DEA6",
        },
        {
          title: "Kitchenware",
          image: require("@/assets/images/kitchenware.png"),
          color: "#A8DCEC",
        },
        {
          title: "Book Shelf",
          image: require("@/assets/images/book_shelf.png"),
          color: "#F9BDBD",
        },
        {
          title: "Electronics",
          image: require("@/assets/images/electronics.png"),
          color: "#F7DEA6",
        },
      ],
    };
  },
};
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