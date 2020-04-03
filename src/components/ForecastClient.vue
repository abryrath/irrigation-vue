<template>
  <el-row>
    <div v-if="loading">Loading...</div>
    <Forecast v-else v-for="(f, i) in forecasts" :forecast="f" :key="f.dt" :offset="i"/>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { format } from "@/util/time";
import Forecast from "@/components/Forecast.vue";

@Component({
  components: {
    Forecast
  },
  computed: {
    forecasts: {
      get() {
        console.log("forecasts", this.forecast.list);
        return this.forecast && this.forecast.list.length
          ? this.forecast.list.slice(0, 5)
          : [];
      }
    }
  }
})
export default class ForecastClient extends Vue {
  private loading: boolean = true;
  // @Prop() private loading: boolean = true;
  private forecast: any = null;

  constructor() {
    super();
    // this.loading = true;
  }

  public mounted() {
    this.loading = true;
    fetch("http://localhost:4000/forecast/today")
      .then(resp => resp.json())
      .then(resp => {
        this.forecast = resp;
        // console.log(this.forecast);
        this.loading = false;
      });
  }
}
</script>
