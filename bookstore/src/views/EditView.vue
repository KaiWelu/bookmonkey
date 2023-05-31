<template>
  <h1>Change Book</h1>
  <div class="add-wrapper">
    <form>
      <label for="title">Title</label>
      <input name="title" type="text" v-model="this.book.title" />
      <label for="author">Author</label>
      <input name="author" type="text" v-model="this.book.author" />
      <label for="abstract">Abstract</label>
      <input name="abstract" type="text" v-model="this.book.abstract" />
      <label for="isbn">ISBN</label>
      <input name="isbn" type="text" v-model="this.book.isbn" />
      <button @click="changeBook()">Submit Change</button>
    </form>
  </div>
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
      this.book.id = this.book.isbn;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  all: unset;
  background-color: white;
  color: black;
  padding: 0.5rem;
}

.add-wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
}

button {
  all: unset;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #219ebc;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
}
label {
  text-align: start;
  font-size: 0.8rem;
}
</style>
