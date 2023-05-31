<template>
  <h1>Change Book</h1>

  <form>
    <input type="text" v-model="this.book.title" />
    <input type="text" v-model="this.book.author" />
    <input type="text" v-model="this.book.abstract" />
    <input type="text" v-model="this.book.isbn" />
    <button @click="changeBook()">Submit</button>
  </form>
</template>

<script>
export default {
  name: "EditView",
  data() {
    return {
      book: {},
    };
  },
  methods: {
    changeBook() {
      fetch("http://localhost:4730/books/" + this.$route.params.isbn, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(this.book),
      })
        .then((res) => res)
        .then((res) => console.log(res));
    },
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((res) => {
        this.book = res;
      });
  },
};
</script>

<style scoped>
form {
  margin: 2rem;
}

input {
}
</style>
