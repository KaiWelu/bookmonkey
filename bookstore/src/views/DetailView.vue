<template>
  <img :src="book.cover" />
  <h1>{{ book.title }}</h1>
  <h2>{{ book.subtitle }}</h2>
  <p>{{ book.author }}</p>
  <div>{{ book.abstract }}</div>
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

<style scoped></style>
