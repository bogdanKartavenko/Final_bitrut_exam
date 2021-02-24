<template>
  <div class="testimony">
    <app-title text="What they say" caption="TESTIMONY" />
    <div class="testimony__wrapper">
      <div class="testimony__wrapper_img">
        <div class="testimony__img">
          <img src="@/assets/images/testimony.png" alt="" />
        </div>
        <div class="testimony__img">
          <img src="@/assets/images/testimony1.png" alt="" />
        </div>
      </div>
      <div class="testimony__wrapper-card">
        <div class="testimony__card">
          <app-star class="tistimony__star"></app-star>
          <div class="testimony__wrapper-text">
            My experience with WOODIES is a complete success, from customed
            furniture, range of product, modern design, purchasing experience,
            the delivery and newsletter. Litterally everything is great. Thank
            you!
          </div>
          <div class="testimony__wrapper-accaunt">
            <img class="tistimony__img-account" src="@/assets/images/Mask_Group.png" alt="img" />
            <div class="testimony__wrapper-name">
              <div>Sandra Dewi</div>
              <div>Jakarta Selatan</div>
            </div>
          </div>
        </div>
        <div class="testimony__wrapper-button">
          <button class="testimony__button-left">
            <div class="testimony__border-left"></div>
            &#8592; Previous
          </button>
          <button class="testimony__button-right">
            Next &#8594;
            <div class="testimony__border-right"></div>
          </button>
        </div>
      </div>
    </div>
    <div class="testimony__wrapper-frame">
      <img
        class="testimony__img-frame"
        src="@/assets/images/testimony_frame.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import AppStar from "@/components/common/AppStar.vue";
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: { AppTitle, AppStar },
  name: "AppTestimony",
};
</script>

<style lang="scss">
.testimony {
  @include media ($screen-tablet) {
    color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  }
  color: #3e3f43;
  @include flex(flex-start, center, column);
  width: 100%;
  &__wrapper {
    @include media ($screen-tablet) {
      width: 100%;
    max-width: 952px;
    margin-top: 40px;
    @include flex(space-between);
    }
    width: 100%;
    max-width: 952px;
    margin-top: 40px;
    @include flex(space-between, stretch, row, wrap);
  }
  &__wrapper_img {
    @include media ($screen-tablet) {
      @include flex(space-between);
    max-width: 520px;

    }
    @include flex(space-between, stretch, row, wrap);
    max-width: 520px;
  }
  &__wrapper-button {
    max-width: 384px;
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
  }
  &__wrapper-frame {
    width: 100%;
    max-width: 952px;
    margin: 23px 0 120px 0;
    @include flex(flex-end);
  }
  &__wrapper-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin: 16px 0px;
  }
  &__wrapper-name {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #afafaf;
  }
  &__wrapper-accaunt {
    display: flex;
    align-items: center;

  }
  &__button-left {
    cursor: pointer;
    color: #c4c4c4;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    &:hover {
      color: #3e3f43;
    }
  }
  &__button-right {
    cursor: pointer;
    color: #c4c4c4;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    &:hover {
      color: #3e3f43;
    }
  }
  &__img {
    width: 240px;
    height: 320px;
  }
  &__card {
    max-width: 384px;
    height: 280px;
    border: 1px solid #a8dcec;
    padding: 54px 16px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &__img-account {
    width: 40px;
    height: 40px;
  }
  &__star {
    margin: 20px;
  }
}
</style>
