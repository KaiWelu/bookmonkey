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
          <button>
            <router-link :to="{ name: 'EditView', params: { isbn: book.id } }">
              <svg
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
                />
              </svg>
            </router-link>
          </button>

          <button @click="deleteBook(book.isbn)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
              :data-id="book.isbn"
              @click="deleteBook($event)"
            >
              <path
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
              />
            </svg>
          </button>
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
    deleteBook(isbn) {
      debugger;
      fetch("http://localhost:4730/books/" + isbn, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
      this.getBooks();
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
  gap: 0.5rem;
}

tr:hover {
  background-color: #219dbc90;
  border-radius: 2px;
}

a {
  color: white;
}

a:hover {
  color: #ffb703;
}

svg:hover {
  color: #ffb703;
}

button {
  all: unset;
}
</style>
