<template>
  <h1>Add New Book</h1>

  <form>
    <input type="text" v-model="this.title" />
    <input type="text" v-model="this.author" />
    <input type="text" v-model="this.abstract" />
    <input type="text" v-model="this.isbn" />
    <button @click="addBook()">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "Book Title",
      author: "Author",
      abstract: "Abstract",
      isbn: "ISBN",
    };
  },
  methods: {
    addBook() {
      fetch("http://localhost:4730/books/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          subtitle: "…",
          isbn: this.isbn,
          abstract: this.abstract,
          numPages: 123,
          author: this.author,
          publisher: "…",
          price: "$..",
          cover: "http://….png",
        }),
      })
        .then((res) => res)
        .then((res) => console.log(res));
    },
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
