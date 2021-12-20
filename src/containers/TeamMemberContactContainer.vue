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
  isDismissed = false;

  mounted(): void {
    this.fetchLiiper();
  }

  @Watch('liiperId')
  fetchLiiper(): void {
    this.$store.dispatch('zebra/fetchLiiper', this.liiperId);
  }

  onClose(): void {
    this.isDismissed = true;
  }

  get loading(): boolean {
    return this.$store.getters['zebra/liiperLoading'];
  }

  get liiper(): Liiper {
    return this.$store.getters['zebra/liiper'];
  }
}
</script>

<style scoped lang="scss"></style>
