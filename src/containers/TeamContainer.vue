<template>
  <div>
    <transition name="fade">
      <TeamMemberContactComponent
        :team-member="selectedTeamMember"
        :dismissible="true"
        v-if="selectedTeamMember"
        @close="onContactClose()"
      ></TeamMemberContactComponent>
    </transition>

    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mb-2"
        v-for="liiper in liipers"
        v-bind:key="liiper.id"
      >
        <TeamMemberComponent
          :team-member="liiper"
          :is-selectable="true"
          @selected="onTeamMemberSelected($event)"
        ></TeamMemberComponent>
      </div>
    </div>

    <div v-if="loading" class="d-flex justify-content-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TeamMemberComponent from '@/components/TeamMemberComponent.vue';
import {Liiper} from '@/store/zebra/models';
import TeamMemberContactComponent from '@/components/TeamMemberContactComponent.vue';

@Component({
  components: {
    TeamMemberComponent,
    TeamMemberContactComponent,
  },
})
export default class TeamContainer extends Vue {
  selectedTeamMember: Liiper | null = null;

  mounted(): void {
    this.$store.dispatch('zebra/fetchLiipers');
  }

  onTeamMemberSelected($event: {liiper: Liiper}): void {
    this.selectedTeamMember = $event.liiper;
    this.scrollToTop();
  }

  onContactClose(): void {
    this.selectedTeamMember = null;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  get loading(): boolean {
    return this.$store.getters['zebra/liipersLoading'];
  }

  get liipers(): Liiper[] {
    return this.$store.getters['zebra/liipersNameAscending'];
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
