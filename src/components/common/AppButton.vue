<template>
   <button class="button"><slot /></button>
</template>

<script>
export default {
name: "AppButton"
}
</script>

<style lang="scss" scope>
.button {
  height: 50px;
  background: #daa520;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: #ffff;
  &:hover {
      background: #f9bdbd;
      color: #ffff;
      transition: 0.2s;
       transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

}
</style>