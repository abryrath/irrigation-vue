<template>
  <div :class="containerClass">
    <div>
      <p class="text-lg">{{ hour }}</p>
    </div>
    <div>
      <CloudIcon v-if="$props.forecast.summary == 'Clouds'" />
      <SunIcon v-else />
    </div>
    <div>
      <p class="text-xl">{{ temp }}&deg;</p>
      <p class="text-md">feels like {{ feelsLike }}&deg;</p>
    </div>
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

  get hour(): string {
    const h: number = this.$props.forecast.hour;
    if (h < 12) {
      return `${h}am`;
    } else if (h == 12) {
      return '12pm';
    } else {
      return `${h - 12}pm`;
    }
  }

  get temp(): number {
    return this.$props.forecast.temp;
  }

  get feelsLike(): number {
    return this.$props.forecast.feels_like;
  }

  get past(): boolean {
    return false;
  }
  get current(): boolean {
    return true;
  }

  get containerClass(): any {
    return {
      current: this.current,
      past: this.past,
      future: !this.current && !this.past,
      'p-2': true,
      'm-2': true,
      flex: true,
      'flex-col': true,
      'md:flex-row': true,
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
