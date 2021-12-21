<template>
  <div class="position-relative not-found__container">
    <div class="position-absolute top-50 start-50 translate-middle text-center">
      <h1 class="font-monospace">404</h1>
      <span>This page doesn't exist.</span>
      <router-link to="/" class="d-block btn btn-link">Back Home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class NotFoundContainer extends Vue {}
</script>

<style scoped lang="scss">
.not-found {
  &__container {
    height: calc(100vh - 1.5rem);
  }
}
</style>
