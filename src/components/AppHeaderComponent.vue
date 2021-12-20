<template>
  <div class="sticky-top pt-4 bg-body">
    <div class="row">
      <div class="col-auto">
        <router-link to="/">
          <img src="/liip_slashes.svg" alt="//" class="header__icon" />
        </router-link>
      </div>
      <div class="col align-self-center">
        <h1 class="mb-0">{{ title }}</h1>
      </div>
      <div class="col-auto align-self-center">
        <router-link to="/liiper/569">
          <i class="bi bi-person-circle fs-3 text-secondary mx-3"></i>
        </router-link>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class AppHeaderComponent extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped lang="scss">
.header {
  &__icon {
    width: 5rem;
  }
}
</style>
