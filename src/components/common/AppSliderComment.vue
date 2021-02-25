<template>
  <div class="glide">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">0
            <app-star class="tistimony__star"></app-star>
            <div class="testimony__wrapper-text">
              My experience with WOODIES is a complete success, from customed
              furniture, range of product, modern design, purchasing experience,
              the delivery and newsletter. Litterally everything is great. Thank
              you!
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
          </li>
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
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
  </div>
</template>

<script>

import Glide from "@glidejs/glide";

// import AppStar from "@/components/common/AppStar.vue";

export default {
  // components: { AppStar },
  name: "AppSliderComment",
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 30,
      autoplay: 2500,
    }).mount();
  },
};
</script>

<style>
</style>