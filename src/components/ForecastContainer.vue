<template>
  <div class="flex flex-col lg:flex-row p-2 m-2">
    <div v-if="$store.state.forecastLoading">Loading...</div>
    <div v-else-if="error">Error</div>

    <Forecast v-else v-for="f in forecasts" :forecast="f" :key="f.dt" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { format } from '@/util/time';
import Forecast from '@/components/Forecast.vue';
import { fetchForecastToday } from '@/util/api';
import { IForecast, IForecastResponse } from '../interfaces';

@Component({
  components: {
    Forecast,
  },
})
export default class ForecastClient extends Vue {
  // @Prop({}) public response!: IForecastResponse | null;
  // private loading: boolean = true;
  private error: boolean = false;
  // private forecast?: IForecastResponse;

  get loading(): boolean {
    return this.forecasts.length === 0;
  }

  get forecasts(): IForecast[] {
    // console.log('forecasts', this.forecast.list);
    try {
      return this.$store.state.forecast
        ? this.$store.state.forecast.list.slice(0, 5)
        : [];
    } catch (e) {
      return [];
    }
  }
}
</script>
