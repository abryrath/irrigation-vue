<template>
  <div>
    <!-- We'll use <slider>, which is an open-source component
         called vue-slider component:
         https://github.com/NightCatSama/vue-slider-component
    -->
    <vue-slider
      :value="sliderValue"
      width="100%"
      :min="min"
      :max="max"
      tooltip="always"
      :style="{
        marginTop: '2.5em',
      }"
      :processStyle="{
        backgroundColor: 'darkorange',
      }"
      :bgStyle="{
        backgroundColor: 'darkslateblue',
      }"
      :sliderStyle="{
        backgroundColor: 'darkorange',
        boxShadow: 'none',
      }"
    >
      <template slot="tooltip" scope="tooltip">
        <!-- Here we're using a scoped-slot. It's an
           advanced, but incredibly useful pattern.
           However, explaining it is outside the
           scope of this example.
           Here's a great explanation of them:
           https://adamwathan.me/renderless-components-in-vuejs/
      -->
        <div v-if="tooltip.index === 0">
          {{ formatTime(sunrise) }}
        </div>
        <div v-else>
          {{ formatTime(sunset) }}
        </div>
      </template>
    </vue-slider>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import { Moment } from 'moment';
import { timeToSeconds, formatTimeOnly } from '@/util/time.ts';

const SECONDS_IN_DAY = 24 * 60 * 60;

// inspired by https://codepen.io/pj_/pen/rvqKEV
@Component({
  components: {
    VueSlider,
  },
})
export default class SunriseSunsetSlider extends Vue {
  @Prop() public sunrise!: Moment;
  @Prop() public sunset!: Moment;
  private max: number = SECONDS_IN_DAY;
  private min: number = 0;

  public timeInSeconds(time: Moment): number {
    return timeToSeconds(time);
  }

  public formatTime(time: Moment): string {
    return formatTimeOnly(time);
  }

  get sliderValue(): number[] {
    return [this.timeInSeconds(this.$props.sunrise), this.timeInSeconds(this.$props.sunset)];
  }
}
</script>
