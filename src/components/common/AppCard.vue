<template>
  <li class="card" :style="{ backgroundColor: color }">
    <div class="card__text">{{ title }}</div>
    <div class="card__image-wrapper" :style="{ justifyContent: align }">
      <img class="card__img" :src="image" alt="Desk" />
    </div>
    <app-button-shop>Shop Now</app-button-shop>
  </li>
</template>
<script>
export default {
  name: "AppCard",
  props: {
    title: String,
    image: String,
    color: String,
    align: {
      type: String,
      default: "center",
      validator: function (value) {
        return ["center", "flex-start", "flex-end"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style lang="scss">
.card {
  width: 280px;
  height: 400px;
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  margin: 28px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  &__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__text {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    color: #3e3f43;
    margin: 0 0 0 16px;
  }
}
</style>