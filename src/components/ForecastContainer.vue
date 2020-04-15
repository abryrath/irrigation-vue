<template>
  <div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
    <!-- Body -->
    <div
      class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
      style="min-height: 2rem;"
    >
      <div v-if="$store.state.forecastLoading">Loading...</div>
      <div v-else-if="error">Error</div>

      <Forecast v-else v-for="(f,i) in forecasts" :forecast="f" :key="f.dt" :active="active === i">
        <button v-if="i > 0" class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline" @click="() => setActive(i-1)">
        <span class="block" style="transform: scale(-1);">&#x279c;</span>
      </button>
      <button v-if="i + 1  < forecasts.length" class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline" @click="() => setActive(i+1)">
        <span class="block" style="transform: scale(1);">&#x279c;</span>
      </button>
      </Forecast>
    </div>
    <!-- Tabs -->
    <div
      v-if="!$store.state.forecastLoading"
      class="flex items-cetner pt-5 justify-between"
    >
      <button
        v-for="(f,i) in forecasts"
        @click="() => setActive(i)"
        :key="f.hour"
        :class="{'px-2': true, 'opacity-50 hover:opacity-100 focus:opacity-100': i !== active, 'opacity-100': i === active}
        "
      >
        {{ timeOfDay(f.hour) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { format } from '@/util/time';
import Forecast from '@/components/Forecast.vue';
import { fetchForecastToday } from '@/util/api';
import { timeOfDay } from '@/util/time';
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
  public active: number = 0;
  // private forecast?: IForecastResponse;

  public created() {
    this.forecastModule = getModule(ForecastStore, this.$store);
  }

  public setActive(i: number): void {
    this.active = i;
  }

  public timeOfDay(hour: number): string {
    return timeOfDay(hour);
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
