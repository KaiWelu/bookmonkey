<template>
  <h1>Booklist</h1>
  <article class="booklist">
    <table>
      <tr>
        <th>Title</th>
        <th>ISBN</th>
        <th>Change</th>
      </tr>
      <tr v-for="book in bookList" :key="book.id">
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td><button>Edit</button></td>
      </tr>
    </table>
  </article>
</template>

<script>
export default {
  data() {
    return {
      bookList: [],
      defaultApiUrl: "http://localhost:4730/",
    };
  },
  methods: {
    getBooks() {
      fetch("http://localhost:4730/books")
        .then((res) => res.json())
        .then((res) => {
          this.bookList = res;
        });
    },
  },
  mounted() {
    fetch("http://localhost:4730/books")
      .then((res) => res.json())
      .then((res) => {
        this.bookList = res;
      });
  },
};
</script>

<style scoped>
.booklist {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.book-preview {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: lightsteelblue;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  width: 50%;
}

td {
  text-align: start;
  padding: 0.2rem;
}

th {
  padding: 0.2rem;
}

tr {
  background-color: rgb(207, 234, 234);
}

table {
  border-spacing: 0.5rem;
}
</style>
