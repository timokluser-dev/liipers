<template>
  <div>
    <div v-if="!loading && story">
      <AppHeaderComponent :title="story.content.title"></AppHeaderComponent>

      <template v-for="blok in story.content.body">
        <component
          :is="blok.component"
          :key="blok._uid"
          v-bind="blok"
          v-editable="blok"
        ></component>
      </template>
    </div>

    <NotFoundContainer v-else-if="!loading && !story"></NotFoundContainer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeaderComponent from '@/components/AppHeaderComponent.vue';
import {StoryData} from 'storyblok-js-client';
import {storyblokConfig} from '@/helpers/storyblok-client';
import TeamMemberContainer from '@/containers/TeamMemberContainer.vue';
import TeamMemberContactContainer from '@/containers/TeamMemberContactContainer.vue';
import NotFoundContainer from '@/containers/NotFoundContainer.vue';

@Component({
  components: {
    // all storyblok components:
    AppHeaderComponent,
    TeamMemberContainer,
    TeamMemberContactContainer,
    NotFoundContainer,
  },
})
export default class StoryblokPage extends Vue {
  pageRoute: string | null = null;

  mounted(): void {
    this.pageRoute = this.$route.path;
    this.$store.dispatch('storyblok/fetchStory', this.pageRoute);
    this.initLiveEdit();
  }

  initLiveEdit(): void {
    // storyblok bridge init
    window.storyblok.init(storyblokConfig);

    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) this.registerLiveEditStoryUpdate();
    });
  }

  registerLiveEditStoryUpdate(): void {
    // see: https://www.storyblok.com/docs/Guides/storyblok-latest-js#:~:text=%7D-,Input%20event,-The
    window.storyblok.on('input', payload => {
      const story: StoryData = payload?.story;
      this.$store.commit('storyblok/updateStory', story);
    });
  }

  get loading(): boolean {
    return this.$store.getters['storyblok/storyLoading'];
  }

  get story(): StoryData {
    return this.$store.getters['storyblok/story'];
  }
}
</script>

<style scoped lang="scss"></style>
