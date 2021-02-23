<template>
   <button class="button"><slot /></button>
</template>

<script>
export default {
name: "AppButton"
}
</script>

<style lang="scss">
.button {
  height: 50px;
  background: #daa520;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: #ffff;
  &:hover {
      background: #f9bdbd;
      color: #ffff;
      transition: 0.5s;
    }
}
</style>