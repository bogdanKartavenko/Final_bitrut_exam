<template>
  <div class="input">
    <div class="input__row">
      <label class="input__label" :for="id" v-if="!!label">{{ label }}</label>
      <span v-if="hasError" class="input__message">{{ errorMessage }}</span>
    </div>
    <input
      class="input__input"
      :class="{ _error: hasError, _valid: valid }"
      :placeholder="placeholder"
      :id="id"
      :type="type"
      :required="required"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />
  </div>
</template>

<script>
import { v4 } from "uuid";

export default {
  name: "AppInput",
  props: {
    label: String,
    message: String,
    type: String,
    required: Boolean,
    placeholder: String,
    hasError: Boolean,
    errorMessage: String,
    value: String,
    valid: Boolean,
  },
  data() {
    return {
      id: `id-${v4}`,
    };
  },
};
</script>

<style lang="scss">
.input__row {
  display: flex;
  justify-content: space-between;
}
.input__input {
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
.input__input._valid {
  border-color: green;
}
.input__input._error {
  border-color: red;
}
</style>