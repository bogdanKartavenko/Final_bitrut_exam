<template>
  <a @click="onClick" class="link" :href="href"><slot /></a>
</template>


<script>
export default {
  name: "TheNavigationItem",
  props: {
    href: String,
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
  color: white;
  white-space: nowrap;
}
</style>