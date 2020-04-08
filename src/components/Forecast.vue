<template>
  <div :class="containerClass">
    <p>Clouds: {{ clouds }}</p>
    <SunIcon v-if="clouds < 50" />
    <CloudIcon v-else-if="clouds >= 50"/>
    <h3 class="medium">{{ dateTimeString }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SunIcon, CloudIcon } from 'vue-feather-icons';
import moment from 'moment';

import { IForecast } from '@/interfaces';
import { format, toDateTime } from '@/util/time';

@Component({
  components: {
    SunIcon,
    CloudIcon,
  },
})
export default class Forecast extends Vue {
  @Prop() public forecast!: IForecast;
  @Prop() private offset!: number;

  get clouds(): number {
    return this.$props.forecast.clouds.all;
  }

  get dateTime(): moment.Moment {
    return toDateTime(this.$props.forecast.dt);
  }

  get dateDiff(): moment.Duration {
    const dt = this.dateTime;
    const now = moment();
    return moment.duration(now.diff(dt));
  }
  get past(): boolean {
    const diff = this.dateDiff;
    return diff.get('hours') > 3;
  }
  get current(): boolean {
    const diff = this.dateDiff;
    const hours = diff.get('hours');
    return hours <= 3 && hours > 0;
  }

  get dateTimeString(): string {
    return this.$props.forecast ? format(this.$props.forecast.dt) : '';
  }

  get containerClass(): any {
    return {
      current: this.current,
      past: this.past,
      future: !this.current && !this.past,
      'p-10': true,
      'm-2': true,
    };
  }
}
</script>

<style scoped lang="scss">
.current {
  background-color: #cccccc;
}
.past {
  background-color: #888888;
}
.future {
  background-color: #e8e8e8;
}
</style>
