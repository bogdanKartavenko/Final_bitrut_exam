<template>
  <button
    @click="(e) => $emit('click', e)"
    class="button-input"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    disabled: Boolean,
  },
};
</script>
<style lang="scss">
.button-input {
  @include media ($screen-tablet) {
    background-color: #daa520;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  width: 120px;
  height: 40px;
  margin: auto 0;
  cursor: pointer;
  transition: all 0.2s ease;
  }
  background-color: #daa520;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  width: 120px;
  height: 40px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease;
}
.button:disabled {
  background-color: darkgray;
  color: grey;
  cursor: not-allowed;
}
</style>