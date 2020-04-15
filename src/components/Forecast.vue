<template>
  <div :class="{ hidden: !$props.active }">
    <div
      class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
      style="min-height: 7rem;"
    >
      <div class="absolute inset-0 w-full h-full p-2">
        <CloudIcon
          v-if="$props.forecast.summary == 'Clouds'"
          class="w-full h-24"
        />
        <SunIcon v-else class="w-full h-24"
      />
      </div>
    </div>
    <!-- <div :class="containerClass"> -->
    <div
      class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg"
    >
      <div class="px-12 py-2 w-full md:pr-24 md:pl-16 md:py-12">
        <p class="text-xl">{{ hour }}</p>
        <p class="text-xl">{{ temp }}&deg;</p>
        <p class="text-md">feels like {{ feelsLike }}&deg;</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SunIcon, CloudIcon } from 'vue-feather-icons';
import moment from 'moment';

import { IForecast } from '@/interfaces';
import { format, toDateTime, timeOfDay } from '@/util/time';

@Component({
  components: {
    SunIcon,
    CloudIcon,
  },
})
export default class Forecast extends Vue {
  @Prop({}) public forecast!: IForecast;
  @Prop({}) private offset!: number;
  @Prop({}) private active!: boolean;

  get hour(): string {
    const h: number = this.$props.forecast.hour;
    return timeOfDay(h);
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
