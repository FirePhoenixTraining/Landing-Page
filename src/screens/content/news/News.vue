<template>
  <div class="news-container">
    News works!
    <ConfirmDialog :active.sync="show" mode="confirm">
      <h1>Test</h1>
    </ConfirmDialog>
    <button type="button" @click="show = !show">Toggle Dialog</button>
  </div>
</template>

<script>
import { ConfirmDialog } from "@/core";

export default {
  name: "News",
  components: {
    ConfirmDialog
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped></style>
