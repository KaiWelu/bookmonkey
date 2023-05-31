<template>
  <nav>
    <router-link class="nav-button" to="/">Booklist</router-link>
    <router-link class="nav-button" :to="{ name: 'AddBookView' }"
      >Add Book</router-link
    >
  </nav>
  <div><router-view /></div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
#app {
  _font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Nanum Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  _color: #2c3e50;
  position: relative;
  background-color: #023047;
  color: white;
}

nav {
  padding: 30px;
  text-align: center;
  background-color: #023047;
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* position: fixed;
  top: 0;
  width: 100%; */
}

nav a {
  font-weight: bold;
}

.nav-button {
  all: unset;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #219ebc;
  color: white;
  padding: 0.5rem;
  border: solid #023047 4px;
  border-radius: 4px;
}

.nav-button:hover {
  color: #023047;
  background-color: white;
}

nav a.router-link-exact-active {
  border: solid white 2px;
}
</style>
