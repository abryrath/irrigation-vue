<template>
  <div>
    Day Overview<br/>
    Sunrise: {{ sunrise }}<br/>
    Sunset: {{ sunset }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import moment, { Moment } from 'moment';
import ForecastStore from '../store/forecast';
import { formatTimeOnly } from '../util/time';

@Component
export default class DayOverview extends Vue {
  private forecastModule: ForecastStore;
  public created() {
    this.forecastModule = getModule(ForecastStore, this.$store);
  }

  get sunrise(): string {
    let sr = this.forecastModule.day ? this.forecastModule.day.sunrise : '';
    if (!sr.length) {
      return 'loading';
    }
    const m = moment(sr);
    return formatTimeOnly(m);
  }
  get sunset(): string {
    let ss = this.forecastModule.day ? this.forecastModule.day.sunset : '';
    if (!ss.length) {
      return 'loading';
    }
    const m = moment(ss);
    return formatTimeOnly(m);
  }
}
</script>
