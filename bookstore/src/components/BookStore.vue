<template>
  <article class="booklist">
    <table>
      <tr>
        <th class="table-head">Title</th>
        <th class="table-head">ISBN</th>
        <th class="table-head">Change</th>
      </tr>
      <tr v-for="book in bookList" :key="book.id">
        <td>{{ book.title }}</td>
        <td>
          <router-link
            :to="{ name: 'DetailView', params: { isbn: book.id } }"
            >{{ book.isbn }}</router-link
          >
        </td>
        <td class="change-td">
          <router-link :to="{ name: 'EditView', params: { isbn: book.id } }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              /></svg
          ></router-link>
        </td>
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
  justify-content: center;
  gap: 1rem;
}
.book-preview {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  _background-color: lightsteelblue;
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

table {
  margin-top: 1rem;
  border-spacing: 0.5rem;
  border: solid white 2px;
  border-radius: 2px;
}

.table-head {
  background-color: #219ebc;
  text-align: start;
  padding: 0.5rem;
}

.change-td {
  display: flex;
  justify-content: center;
}

a {
  color: white;
}

a:hover {
  color: #ffb703;
}
</style>
