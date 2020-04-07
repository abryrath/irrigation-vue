<template>
  <el-col :span="8" :offset="$props.offset || 0">
    <el-card
      :class="{ current: current, past: past, future: !current && !past }"
      :body-style="{ padding: '20px' }"
      shadow="always"
    >
      <h3 class="medium">{{ dateTimeString }}</h3>

    </el-card>
  </el-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SunIcon from 'vue-feather-icons/icons/SunIcon';
import moment from 'moment';

import { IForecast } from '@/interfaces';
import { format, toDateTime } from '@/util/time';

@Component({
  components: {
    IconSunny,
  },
})
export default class Forecast extends Vue {
  @Prop() public forecast: IForecast | null;
  @Prop() private offset!: number;

  public mounted() {
    feather.replace();
  }

  get dateTime() {
    return toDateTime(this.$props.forecast.dt);
  }

  get dateDiff() {
    const dt = this.dateTime;
    const now = moment();
    return moment.duration(now.diff(dt));
  }
  get past() {
    const diff = this.dateDiff;
    console.log('past', diff);
    return diff.get('hours') > 3;
  }
  get current() {
    const diff = this.dateDiff;
    const hours = diff.get('hours');
    // console.log('current', hours);
    return hours <= 3 && hours > 0;
  }

  public get dateTimeString() {
    return this.$props.forecast ? format(this.$props.forecast.dt) : '';
  }
}
</script>

<style scoped lang="scss">
.current {
  background-color: green;
}
.past {
  background-color: gray;
}
.future {
  background-color: yellow;
}
</style>
