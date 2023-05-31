<template>
  <h1>Add New Book</h1>
  <div class="add-wrapper">
    <form>
      <label for="title">Title</label>
      <input name="title" type="text" v-model="this.title" />
      <label for="author">Author</label>
      <input name="author" type="text" v-model="this.author" />
      <label for="abstract">Abstract</label>
      <input name="abstract" type="text" v-model="this.abstract" />
      <label for="isbn">ISBN</label>
      <input name="isbn" type="text" v-model="this.isbn" />
      <button @click="addBook()">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      abstract: "",
      isbn: "",
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  text-align: start;
  font-size: 0.8rem;
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
</style>
