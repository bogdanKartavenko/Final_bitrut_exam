<template>
  <div class="title">
    <img class="title__img" src="@/assets/images/logo2.png" alt="img" />
    <div class="title__text">{{ text }}</div>
    <div class="title__border" ></div>
    <div class="title__caption">{{ caption }}</div>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    text: String,
    caption: String,

  },
};
</script>

<style lang="scss">
.title {
  @include media ($screen-tablet) {
  width: 100%;
  max-width: 952px;
  min-height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  }
  width: 100%;
  max-width: 952px;
  min-height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 120px;
  &__caption {
    @include media ($screen-tablet) {
      display: flex;
      height: 98px;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px;
    color: rgba(34, 34, 34, 0.1);
    }
    display: flex;
    text-align: center;
    height: 98px;
    font-weight: 800;
    font-size: 48px;
    line-height: 98px;
    color: rgba(34, 34, 34, 0.1);
  }

  &__text {
    @include media ($screen-tablet) {
      font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    }
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
  }
  &__border {
    @include media ($screen-tablet) {
      display: flex;
      flex-grow: 1;
    border-top: 1px solid;
    margin: 0 16px;
    }
   display: none;
  }
}
</style>