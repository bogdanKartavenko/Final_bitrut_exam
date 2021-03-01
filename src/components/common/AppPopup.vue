<template>
  <div class="AppPopup">
    <div class="AppPopup__body">
      <div class="AppPopup__content animate__animated animate__fadeInDown">
        <button @click="closePopupInfo" class="AppPopup__close">X</button>
        <div class="AppPopup__title">Registered</div>
        <form action="AppPopup__form">
          <input class="AppPopup__input" type="login" placeholder="Username" />
          <input
            class="AppPopup__input"
            type="password"
            placeholder="Password"
          />
          <input class="AppPopup__input" type="Email" placeholder="Email" />
          <button  v-on:click="onSubmit" class="AppPopup__button button">Done</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  methods: {
    closePopupInfo() {
      this.$emit("closePopupInfo");
    },
    onSubmit() {
      alert("Thank you for registering!");
    },
  },
};
</script>

<style lang="scss">
.AppPopup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  overflow: auto;

  &__input {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #e9eff6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;
    outline: 0;
  }
  &__title {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 30px;
  }
  &:target {
    opacity: 1;
    visibility: visible;
  }
  &__body {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 15px;
  }
  &__content {
    background-color: #ffff;
    color: #3e3f43;
    width: 300px;
    padding: 15px;
    position: relative;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-direction: 0.4s;
    border-radius: 5px;
    border: 3px solid#daa520;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__close {
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 5px;
    right: 10px;
    &:hover,
    &:focus {
      color: #daa520;
      text-decoration: none;
      cursor: pointer;
    }
  }
  &__button {
    width: 150px;
  }
}
</style>