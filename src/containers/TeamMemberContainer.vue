<template>
  <TeamMemberComponent v-if="!loading && liiper" :team-member="liiper" :is-selectable="false"></TeamMemberComponent>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import TeamMemberComponent from "@/components/TeamMemberComponent.vue";
import {Liiper} from "@/store/zebra/models";

@Component({
  components: {
    TeamMemberComponent
  }
})
export default class TeamMemberContainer extends Vue {
  @Prop() liiperId!: number;

  mounted(): void {
    this.fetchLiiper();
  }

  // watch for changes, especially in live editor
  @Watch('liiperId')
  fetchLiiper(): void {
    this.$store.dispatch('zebra/fetchLiiper', this.liiperId);
  }

  get liiper(): Liiper {
    return this.$store.getters['zebra/liiper'];
  }

  get loading(): boolean {
    return this.$store.getters['zebra/liiperLoading'];
  }
}
</script>

<style scoped lang="scss">
</style>
