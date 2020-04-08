<template>
  <div class="home">
    <ForecastContainer />
    <ManualRunContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ForecastContainer from '@/components/ForecastContainer.vue';
import ManualRunContainer from '@/components/ManualRunContainer.vue';
import { IForecastResponse } from '../interfaces';
import { fetchForecastToday } from '../util/api';

@Component({
  components: {
    // HelloWorld,
    ForecastContainer,
    ManualRunContainer,
  },
})
export default class Home extends Vue {
  public forecastResponse?: IForecastResponse = undefined;
  private mounted() {
    this.$store.dispatch('fetchForecast');
  }

  get forecast(): IForecastResponse | null {
    return this.forecastResponse ? this.forecastResponse : null;
  }
}
</script>
