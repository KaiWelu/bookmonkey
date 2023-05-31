<template>
  <BookStore></BookStore>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import BookStore from "@/components/BookStore.vue";

export default {
  name: "HomeView",
  components: {
    BookStore,
  },
};
</script>
