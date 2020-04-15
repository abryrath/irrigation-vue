<template>
  <div>
    <div v-if="!loading" class="forecast">
      <SunriseSunsetSlider :sunrise="sunrise" :sunset="sunset" />
      <ForecastContainer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForecastContainer from '@/components/ForecastContainer.vue';
import SunriseSunsetSlider from '@/components/SunriseSunsetSlider.vue';
import moment, { Moment } from 'moment';

@Component({
  components: {
    ForecastContainer,
    SunriseSunsetSlider,
  },
})
export default class ForecastPage extends Vue {
  get loading(): boolean {
    return this.$store.state.forecast.dayLoading;
  }
  get sunrise(): Moment {
    if (!this.$store.state.forecast) {
      return moment();
    }
    const raw: string = this.$store.state.forecast.day.sunrise;
    return moment(raw);
  }

  get sunset(): Moment {
    if (!this.$store.state.forecast) {
      return moment();
    }
    const raw: string = this.$store.state.forecast.day.sunset;
    return moment(raw);
  }
}
</script>
