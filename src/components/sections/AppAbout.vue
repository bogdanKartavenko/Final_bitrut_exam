<template>
  <div class="about">
    <AppTitle class="about__title" text="Who we are" caption="ABOUT US" />
    <img
        class="about__img-top"
        src="@/assets/images/about_top.png"
        alt="images"
      />
    <div class="about__box-top">
      <!-- <img
        class="about__img-top"
        src="@/assets/images/about_top.png"
        alt="images"
      /> -->
      <div class="about__wrapper-top">
        <div class="about__text">
          WOODIES
          <span class="about__text-small">is the </span>
          <span class="about__text-bold">home of modern wooden furniture</span>
        </div>
        <div class="about__desc desc">
          the answer to your need for furniture with shapes, sizes and colors.
        </div>
      </div>
    </div>
    <div class="about__box-bottom">
      <div class="about__wrapper-bottom">
          <div class="about__text">
            Customized furniture
            <span class="about__text-bold">made just for you</span>
          </div>
          <div class="about__desc desc">
            Get it easy to adjust furniture to the shape and size of your
            dwelling or business.
          </div>
      </div>
      <!-- <img
        class="about__img-bot"
        src="@/assets/images/about_us1.png"
        alt="images"
      /> -->
    </div>
    <img
        class="about__img-bot"
        src="@/assets/images/about_us1.png"
        alt="images"
      />
  </div>
</template>

<script>
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: { AppTitle },
  name: "AppAbout",
};
</script>

<style lang="scss" scoped>
.about {
  @include media($screen-tablet) {
    color: #3e3f43;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 100px auto 0px auto;
    min-height: 1072px;
  }
  color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto 0 auto;
  min-height: 1072px;
  &__img-top {
    @include media($screen-tablet) {
      position: absolute;
      max-width: 594px;
      max-height: 636px;
      z-index: 10;
      left: 0;
      margin-top: 140px;
    }
       position: absolute;
    max-width: 320px;
    max-height: 636px;
    margin-top: 150px;
    left: 0;
    z-index: 10;
  }
  &__img-bot {
    @include media($screen-tablet) {
      position: absolute;
      max-width: 287px;
      max-height: 384px;
      right: 0;
      margin-top: 566px;
      z-index: 10;
    }
    position: absolute;
    max-width: 287px;
    max-height: 384px;
    right: 0;
    margin-top: 566px;
    z-index: 10;
  }
  &__box-top {
    @include media($screen-tablet) {
      position: relative;
      width: 100%;
      max-width: 952px;
      margin: 144px 0 220px 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    position: relative;
    width: 100%;
    max-width: 952px;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__box-bottom {
    @include media($screen-tablet) {
      position: relative;
      width: 100%;
      max-width: 952px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
    position: relative;
    width: 100%;
    max-width: 952px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  &__wrapper-top {
    @include media($screen-tablet) {
      max-width: 448px;
      min-height: 180px;
      margin-left: 78px;
      margin-top: 0px;
      display: flex;
      text-align: start;
      z-index: 10;
    }
    display: flex;
    text-align: center;
    flex-direction: column;
    max-width: 448px;
    min-height: 180px;
    z-index: 10;
    margin: 10px 0 50px 0;
  }
  &__wrapper-bottom {
    @include media($screen-tablet) {
      position: relative;
      max-width: 648px;
      height: 131px;
      display: flex;
      text-align: start;
      z-index: 30;
      padding: 0;
    }
    display: flex;
    text-align: center;
    flex-direction: column;
    position: relative;
    max-width: 648px;
    height: 131px;
    z-index: 30;
    padding: 0 10px;
  }
  &__subtitle {
    max-width: 448px;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
  }
  &__subtitle-small {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
  }
  &__desc {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    margin-top: 16px;
    color: #3e3f43;
  }
  &__text {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #3e3f43;
  }
  &__text-bold {
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
  }
}
</style>
