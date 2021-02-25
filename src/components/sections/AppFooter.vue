<template>
  <div class="AppFooter">
    <div class="AppFooter__wrapper_email">
      <div class="AppFooter__wrapper_title">
        <div class="AppFooter__title">Subscribe to our newsletter</div>
        <div class="AppFooter__subtitle">
          A monthly digest of the new WOODIES products, hot offers, and
          resources.
        </div>
      </div>
        <div class="AppFooter__wrapper-form" id="app">
          <form class="AppFooter__email_form" @submit.prevent="onSubmit">
            <div class="AppFooter__email-group">
              <AppInput
                v-model="email"
                :has-error="emailHasError"
                :error-message="emailErrorMessage"
                :valid="emailValid"
                type="email"
                required
                @blur="emailHasError = !emailValid"
                @focus="emailHasError = false"
              />
              <AppButtonInput :disabled="disabled">Submit</AppButtonInput>
            </div>
          </form>
      </div>
    </div>
    <div class="AppFooter__wrapper">
      <div class="AppFooter__wrapper_text">
        <ul class="AppFooter__list_logo">
          <li class="AppFooter__logo">
            <AppLogo />
          </li>
          <li class="AppFooter__list_text">(012) 8967453</li>
          <li class="AppFooter__list_text">woodies@gmail.com</li>
          <li class="AppFooter__list_text">Jakarta, Indonesia</li>
        </ul>
        <ul class="AppFooter__list">
          <li class="AppFooter__list_title">Product</li>
          <li class="AppFooter__list_text">Furnitures</li>
          <li class="AppFooter__list_text">Packages</li>
          <li class="AppFooter__list_text">Services</li>
        </ul>
        <ul class="AppFooter__list">
          <li class="AppFooter__list_title">Resources</li>
          <li class="AppFooter__list_text">Blog</li>
          <li class="AppFooter__list_text">FAQs</li>
          <li class="AppFooter__list_text">Contact Us</li>
        </ul>
        <ul class="AppFooter__list">
          <li class="AppFooter__list_title">Company</li>
          <li class="AppFooter__list_text">About Us</li>
          <li class="AppFooter__list_text">Jobs</li>
          <li class="AppFooter__list_text">Our Team</li>
        </ul>
        <ul class="AppFooter__list">
          <li class="AppFooter__list_title">Follow Us</li>
          <li class="AppFooter__list_text">Facebook</li>
          <li class="AppFooter__list_text">Instagram</li>
          <li class="AppFooter__list_text">Twitter</li>
        </ul>
      </div>
    </div>

    <div class="AppFooter__date">© 2020 WOODIES</div>
  </div>
</template>

<script>
import AppLogo from "@/components/common/AppLogo.vue";
import AppButtonInput from "@/components/common/AppButtonInput.vue";
import AppInput from "@/components/common/AppInput.vue";

export default {
  components: {
    AppLogo,
    AppButtonInput,
    AppInput,
  },
  name: "Appfooter",
};
</script>

<style lang="scss">
.AppFooter {
  color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  background-image: url("../../assets/images/footer.png");
  background-size: cover;
  &__wrapper_email {
    @include media($screen-tablet) {
      width: 100%;
      max-width: 952px;
      margin: 53px 0 86px 0;
      @include flex(space-between);
    }
    width: 100%;
    max-width: 952px;
    margin: 53px 10px 86px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__wrapper_title {
    max-width: 493px;
    width: 100%;
    display: block;
  }
  &__wrapper {
    width: 100%;
    max-width: 952px;
    @include flex(start);
  }
  &__wrapper_text {
    @include flex(space-between, stretch, row, wrap);
    max-width: 708px;
    width: 100%;
    border-top: 0.5px solid;
  }
  &__title {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
  }
  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
  }
  &__email_form {
    max-width: 941px;
  }
  &__email-group {
    @include media($screen-tablet) {
      @include flex;
      max-width: 941px;
    }
    @include flex(center, center, column);
    max-width: 941px;
  }
  &__input {
    @include media($screen-tablet) {
      width: 328px;
      height: 40px;
      border: 1px solid #daa520;
      font-size: 16px;
      line-height: 22px;
      color: #afafaf;
      padding-left: 16px;
      border-radius: 5px;
      outline: none;
      &:hover {
        border: 2px solid #daa520;
      }
      &:focus {
        border: 2px solid #daa520;
        box-shadow: 0 0 10px #daa520;
      }
    }
    max-width: 328px;
    height: 40px;
    border: 1px solid #daa520;
    font-size: 16px;
    line-height: 22px;
    color: #afafaf;
    padding-left: 16px;
    border-radius: 5px;
    outline: none;
    margin: 10px;
    &:hover {
      border: 2px solid #daa520;
    }
    &:focus {
      border: 2px solid #daa520;
      box-shadow: 0 0 10px #daa520;
    }
  }
  &__button {
    @include media($screen-tablet) {
      border-radius: 0;
      border-radius: 5px;
      width: 120px;
      height: 40px;
      margin: auto 0;
      @include hover {
        box-shadow: 0 0 10px #daa520;
      }
    }
    border-radius: 5px;
    width: 175px;
    height: 40px;
    margin: 10px auto;
    @include hover {
      box-shadow: 0 0 10px #daa520;
    }
  }
  &__list_logo {
    width: 192px;
    margin-top: 24px;
  }
  &__list {
    @include media($screen-tablet) {
      margin-top: 32px;
      width: 14%;
    }
    margin-top: 32px;
    width: 50%;
  }
  &__list_title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    margin: 0 0 16px 0;
    cursor: pointer;
    &:hover {
      color: #daa520;
    }
  }
  &__list_text {
    font-size: 14px;
    line-height: 19px;
    color: #8d8d8d;
    margin: 16px 0px;
    text-align: start;
    cursor: pointer;
    &:hover {
      color: #daa520;
    }
  }
  &__date {
    margin: 45px auto 24px auto;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #8d8d8d;
  }
}
</style>
