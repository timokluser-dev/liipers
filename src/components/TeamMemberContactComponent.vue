<template>
  <div class="card mt-3 mb-3">
    <div class="card-header d-flex align-items-center justify-content-end" v-if="dismissible">
      <button type="button" class="btn-close" aria-label="Close" @click.prevent="onClose"></button>
    </div>

    <div class="card-body">
      <div class="team-contact__title">
        <h2>Hi, I'm {{ teamMember.firstname }} and you?</h2>
      </div>

      <div class="row mb-3 mt-3">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mb-2">
          <TeamMemberComponent
            :team-member="teamMember"
            :is-selectable="false"
          ></TeamMemberComponent>
        </div>
      </div>

      <div class="d-inline-block">
        <p class="d-inline font-monospace">// {{ teamMember.email }}</p>
      </div>

      <form class="form mt-3 team-contact__form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Your Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="you@domain.com"
            v-model="emailFrom"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="3"
            placeholder="Hi 👋"
            v-model="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Liiper} from '@/store/zebra/models';
import TeamMemberComponent from '@/components/TeamMemberComponent.vue';

@Component({
  components: {
    TeamMemberComponent,
  },
})
export default class TeamMemberContactComponent extends Vue {
  @Prop() teamMember!: Liiper;
  @Prop() dismissible!: boolean;

  emailFrom: string | null = null;
  message: string | null = null;

  onSubmit(): void {
    window.location.href = `mailto:${this.teamMember.email}?body=${encodeURIComponent(
      this.message ?? ''
    )}`;
  }

  onClose(): void {
    this.$emit('close');
  }
}
</script>

<style scoped lang="scss">
@import '../variables.scss';

.team-contact {
  &__form {
    button {
      color: $body-bg;
    }
  }
}
</style>
