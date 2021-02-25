<template>
  <li class="item">
    <app-link @click="(e) => this.$emit('click', e)" :href="href">{{
      name
    }}</app-link>
    <slot />
  </li>
</template>

<script>
export default {
  name: "TheNavigationItem",
  props: {
    href: String,
    name: String,
  },
};
</script>

<style scoped>
.item {
  position: relative;
  display: block;
}
.item:not(:last-child) {
  margin-bottom: 12px;
}
.link {
  cursor: pointer;
  text-decoration: underline;
  color: white;
  white-space: nowrap;
}
</style>