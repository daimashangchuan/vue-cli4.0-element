<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  name: "about",
  created() {
    this.showClick(true);
  },
  methods: {
    ...mapActions('AppStore', ['showClick']),
  },
};
</script>
