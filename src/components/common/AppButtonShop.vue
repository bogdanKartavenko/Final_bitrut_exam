<template>
  <button class="button__shop"><slot /></button>
</template>

<script>
export default {
  name: "AppButtonShop",
};
</script>

<style lang="scss">
.button__shop {
  width: 123px;
  height: 40px;
  border: 1px solid;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #3e3f43;
  margin-left: 141px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: white;
  }
}
</style>