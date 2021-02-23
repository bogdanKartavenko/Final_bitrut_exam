<template>
  <div class="categories">
    <AppTitle text="What we have" caption="CATEGORIES" />
    <ul class="categories__card-wrapper">
      <app-card
        v-for="card in cards"
        :key="card.title"
        :image="card.image"
        :title="card.title"
        :color="card.color"
        :align="card.align"
      />
    </ul>
  </div>
</template>

<script>
import AppCard from "@/components/common/AppCard.vue";
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: { AppTitle, AppCard },
  name: "AppCategories",
  data() {
    return {
      cards: [
        {
          title: "Desk",
          image: require("@/assets/images/desk.png"),
          color: "#F9BDBD",
          align: "flex-start",
        },
        {
          title: "Chair",
          image: require("@/assets/images/chair.png"),
          color: "#F7DEA6",
        },
        {
          title: "Kitchenware",
          image: require("@/assets/images/kitchenware.png"),
          color: "#A8DCEC",
        },
        {
          title: "Book Shelf",
          image: require("@/assets/images/book_shelf.png"),
          color: "#F9BDBD",
        },
        {
          title: "Electronics",
          image: require("@/assets/images/electronics.png"),
          color: "#F7DEA6",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.categories {
  color: #3e3f43;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 952px;
  }
}
</style>
