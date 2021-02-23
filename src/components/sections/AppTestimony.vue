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
          <app-star></app-star>
          <div>
            My experience with WOODIES is a complete success, from customed
            furniture, range of product, modern design, purchasing experience,
            the delivery and newsletter. Litterally everything is great. Thank
            you!
          </div>
          <div>
            <!-- <img src="./assets/images/Mask_Group" alt="img" /> -->
            <div>Sandra Dewi</div>
            <div>Jakarta Selatan</div>
          </div>
        </div>
        <div class="testimony__wrapper-button">
          <button class="testimony__button-left"> <div class="testimony__border-left"></div> Previous</button>
          <button class="testimony__button-right">Next <div class="testimony__border-right"></div> </button>
        </div>
      </div>
    </div>
    <div class="testimony__wrapper-frame">
      <img class="testimony__img-frame" src="@/assets/images/testimony_frame.png" alt="">
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
  color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__wrapper {
    width: 100%;
    max-width: 952px;
    margin-top: 40px;
    @include flex (space-between)
  }
  &__wrapper_img {
    @include flex (space-between);
    width: 520px;
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
    margin-top: 23px;
    @include flex (flex-end)
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
    width: 384px;
    height: 280px;
    border: 1px solid #a8dcec;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
