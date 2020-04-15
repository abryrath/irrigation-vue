<template>
  <div class="flex flex-col lg:flex-row p-2 m-2 align-items justify-center">
    <div v-if="$store.state.forecastLoading">Loading...</div>
    <div v-else-if="error">Error</div>

    <Forecast v-else v-for="f in forecasts" :forecast="f" :key="f.dt" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { format } from '@/util/time';
import Forecast from '@/components/Forecast.vue';
import { fetchForecastToday } from '@/util/api';
import { IForecast, IDate } from '../interfaces';
import ForecastStore from '../store/forecast';

@Component({
  components: {
    Forecast,
  },
})
export default class ForecastClient extends Vue {
  // @Prop({}) public response!: IForecastResponse | null;
  // private loading: boolean = true;
  private error: boolean = false;
  private forecastModule: ForecastStore | undefined = undefined;
  // private forecast?: IForecastResponse;

  public created() {
    this.forecastModule = getModule(ForecastStore, this.$store);
  }

  get loading(): boolean {
    return this.forecasts.length === 0;
  }

  get forecasts(): IForecast[] {
    if (!this.forecastModule) {
      return [];
    }
    return this.forecastModule.day ? this.forecastModule.day.forecasts : [];
  }
}
</script>
