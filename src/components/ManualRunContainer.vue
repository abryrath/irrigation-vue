<template>
  <div>
    <div v-if="!loading">
      <Button>Run Now</Button>
      Last Run: {{ lastRunString }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/forms/Button.vue';
import moment, { Moment } from 'moment';
import { format } from '../util/time';

@Component({
  components: {
    Button,
  },
})
export default class ManualRunContainer extends Vue {
  get loading(): boolean {
    return this.$store.state.forecast.lastRunLoading;
  }

  get lastRun(): Moment {
    return moment(this.$store.state.forecast.lastRun.inserted_at);
  }

  get lastRunString(): string {
    return format(this.lastRun);
  }
}
</script>
