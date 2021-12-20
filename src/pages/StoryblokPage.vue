<template>
  <div v-if="!loading && story">
    <AppHeaderComponent :title="story.content.title"></AppHeaderComponent>

    <template v-for="blok in story.content.body">
      <component :is="blok.component" :key="blok._uid" v-bind="blok" v-editable="blok"></component>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeaderComponent from "@/components/AppHeaderComponent.vue";
import {StoryData} from 'storyblok-js-client'
import {storyblokConfig} from "@/helpers/storyblok-client";

@Component({
  components: {
    AppHeaderComponent
  }
})
export default class StoryblokPage extends Vue {
  pageRoute: string | null = null;

  // created(): void {
  // }

  mounted(): void {
    this.pageRoute = this.$route.path;
    this.$store.dispatch('storyblok/fetchStory', this.pageRoute);
    this.initLiveEdit();
  }

  initLiveEdit(): void {
    window.storyblok.init(storyblokConfig);

    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        console.debug('live editor active');
        window.storyblok.on("input", (payload) => {
          const story: StoryData = payload?.story;
          this.$store.commit('storyblok/updateStory', story);
        })
      }
    })
  }

  get loading(): boolean {
    return this.$store.getters['storyblok/storyLoading'];
  }

  get story(): StoryData {
    return this.$store.getters['storyblok/story'];
  }
}
</script>

<style scoped lang="scss">

</style>
