<template>
  <div>
    <AppHeaderComponent title="Meet The Liipers"></AppHeaderComponent>

    <TeamContainer></TeamContainer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeaderComponent from '@/components/AppHeaderComponent.vue';
import TeamContainer from '@/containers/TeamContainer.vue';

@Component({
  components: {
    AppHeaderComponent,
    TeamContainer,
  },
})
export default class HomePage extends Vue {}
</script>

<style scoped lang="scss">
.home {
  &__icon {
    width: 5rem;
  }
}
</style>
