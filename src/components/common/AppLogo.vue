<template>
  <div class="logo">
        <p class="logo__img">
          <img src="@/assets/images/logo.png" alt="logo" />
        </p>
        <p class="logo__text">WOODIES</p>
      </div>
</template>

<script>
export default {
name: "AppLogo"
}
</script>

<style lang="scss">
 .logo {
    width: 192px;
    display: flex;
    align-items: center;
    margin-right: 100px;
    &__img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  &__text {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25em;
    color: rgba(34, 34, 34, 0.75);
  }
  }
</style>