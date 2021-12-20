<template>
  <div>
    <AppHeaderComponent title="Meet Me"></AppHeaderComponent>

    <section class="mb-5">
      <h3 class="mb-3">That's me:</h3>
      <TeamMemberComponent
        :is-selectable="false"
        :team-member="me"
        v-if="!loading && me"
        class="col-md-4 col-sm-6 col-xs-12"
      ></TeamMemberComponent>
    </section>

    <section>
      <h3 class="mb-3">Contact me:</h3>
      <TeamMemberContactComponent
        :team-member="me"
        v-if="!loading && me"
        :dismissible="false"
      ></TeamMemberContactComponent>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeaderComponent from '@/components/AppHeaderComponent.vue';
import TeamMemberComponent from '@/components/TeamMemberComponent.vue';
import TeamMemberContactComponent from '@/components/TeamMemberContactComponent.vue';
import {Liiper} from '@/store/zebra/models';

@Component({
  components: {
    AppHeaderComponent,
    TeamMemberComponent,
    TeamMemberContactComponent,
  },
})
export default class MePage extends Vue {
  readonly id = 569;

  async mounted(): Promise<void> {
    await this.$store.dispatch('zebra/fetchLiiper', this.$route.params.id);
    this.$store.getters['zebra/liiper'] == null && (await this.$router.push('/'));
  }

  get loading(): boolean {
    return this.$store.getters['zebra/liiperLoading'];
  }

  get me(): Liiper {
    return this.$store.getters['zebra/liiper'];
  }
}
</script>

<style scoped lang="scss"></style>
