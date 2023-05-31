<template>
  <div class="detail-wrapper">
    <h1>{{ book.title }}</h1>
    <h2>{{ book.subtitle }}</h2>
    <p>{{ book.author }}</p>
    <div>{{ book.abstract }}</div>
  </div>
  <!-- <img :src="book.cover" /> -->
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      book: {},
    };
  },
  components: {},
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((res) => {
        this.book = res;
      });
  },
};
</script>

<style>
.detail-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  margin-left: 4rem;
  margin-right: 4rem;
}

img {
}
</style>
