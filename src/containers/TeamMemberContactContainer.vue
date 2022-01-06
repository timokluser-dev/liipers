<template>
  <TeamMemberContactComponent
      v-if="!loading && liiper && !isDismissed"
      :team-member="liiper"
      :dismissible="dismissible"
      @close="onClose"
  ></TeamMemberContactComponent>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import TeamMemberContactComponent from '@/components/TeamMemberContactComponent.vue';
import {Liiper} from '@/store/zebra/models';

@Component({
  components: {
    TeamMemberContactComponent,
  },
})
export default class TeamMemberContactContainer extends Vue {
  @Prop() liiperId!: number;
  @Prop() dismissible!: boolean;
  liiper: Liiper | null = null;
  isDismissed = false;

  mounted(): void {
    this.fetchLiiper();
  }

  @Watch('liiperId')
  async fetchLiiper(): Promise<void> {
    await this.$store.dispatch('zebra/fetchLiiper', this.liiperId);
    this.liiper = this.$store.getters['zebra/liiper'];
  }

  onClose(): void {
    this.isDismissed = true;
  }

  get loading(): boolean {
    return this.$store.getters['zebra/liiperLoading'];
  }
}
</script>

<style scoped lang="scss"></style>
