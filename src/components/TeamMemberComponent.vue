<template>
  <div class="team-member" @click.prevent="onClick" :class="{selectable: isSelectable}">
    <div class="row g-0">
      <div class="col-4 align-self-center">
        <img :src="avatar" :alt="teamMember.name" class="team-member__image" draggable="false" />
      </div>
      <div class="col-8 p-3 pt-0 pb-0 align-self-center">
        <span class="team-member__name">{{ teamMember.name }}</span>
        <p class="team-member__job">{{ jobs }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Liiper} from '@/store/zebra/models';

@Component
export default class TeamMemberComponent extends Vue {
  @Prop() teamMember!: Liiper;
  @Prop() isSelectable!: boolean;

  onClick(): void {
    this.isSelectable && this.$emit('selected', {liiper: this.teamMember});
  }

  get avatar(): string {
    return !this.teamMember?.rokka_picture_url
      ? 'assets/avatar-placeholder.png'
      : this.teamMember.rokka_picture_url.replace('{stack}', 'www_liipersmall_3');
  }

  get jobs(): string {
    return this.teamMember.liipch_job_title_names.length
      ? this.teamMember.liipch_job_title_names.join(', ')
      : 'Liiper';
  }
}
</script>

<style scoped lang="scss">
.selectable {
  cursor: pointer;
}

.team-member {
  &__name {
    font-weight: 700;
  }

  &__job {
    color: #a5a59f;
    font-size: 0.9rem;
    margin: 0rem;
  }

  &__image {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
