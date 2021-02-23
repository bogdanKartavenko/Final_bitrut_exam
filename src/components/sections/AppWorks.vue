<template>
  <div class="works">
      <AppTitle text="How to custom" caption="HOW IT WORKS"/>
    <div class="works__box">
      <div class="works__wrapper-img">
        <div class="works__box-img">
          <img src="@/assets/images/works_1.png" alt="" />
          <div class="works__img-text">Choose Design</div>
        </div>
        <div class="works__box-img">
          <img src="@/assets/images/works_2.png" alt="" />
          <div class="works__img-text">Area measuring</div>
        </div>
        <div class="works__box-img">
          <img src="@/assets/images/works_3.png" alt="" />
          <div class="works__img-text">Budgeting</div>
        </div>
        <div class="works__box-img">
          <img src="@/assets/images/works_4.png" alt="" />
          <div class="works__img-text">Production</div>
        </div>
      </div>
      <button class="works__button button">Get Personalized Now</button>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: { AppTitle },
  name: "AppWorks",
};
</script>

<style lang="scss">
.works {
  color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__wrapper-title {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 120px;
  }
  &__border {
    width: 65px;
  }
  &__box {
    width: 80%;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__wrapper-img {
    width: 100%;
    max-width: 952px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &__box-img {
    width: 238px;
    height: 177px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__img-text {
    position: absolute;
    margin-top: 130px;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  &__button {
    width: 212px;
    margin: 64px 0 60px 0;
    &:hover {
      background: #f9bdbd;
      color: #ffff;
      transition: 0.5s;
    }
  }
}
</style>
