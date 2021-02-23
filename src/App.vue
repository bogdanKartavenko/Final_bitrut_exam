<template>
  <div>
    <TheHeader></TheHeader>
    <AppAbout></AppAbout>
    <app-works></app-works>
    <app-categories></app-categories>
    <app-testimony></app-testimony>
    <app-footer></app-footer>
  </div>
</template>

<style>
</style>

<script>
import AppAbout from "./components/sections/AppAbout.vue";
import TheHeader from "./components/TheHeader.vue";
import AppWorks from "@/components/sections/AppWorks.vue";
import AppCategories from "./components/sections/AppCategories";
import AppTestimony from "./components/sections/AppTestimony.vue";
import AppFooter from "./components/sections/AppFooter.vue";

export default {
  components: {
    TheHeader,
    AppAbout,
    AppWorks,
    AppCategories,
    AppTestimony,
    AppFooter,
  },
  name: "App",
};
</script>
