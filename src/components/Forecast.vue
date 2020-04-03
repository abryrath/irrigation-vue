<template>
  <el-col :span="8" :offset="$props.offset || 0">
    <el-card
      :class="{ current: current, past: past, future: !current && !past }"
      :body-style="{ padding: '20px' }"
      shadow="always"
    >
      <h3 class="medium">{{ dateTimeString }}</h3>
      <IconSunny />
    </el-card>
  </el-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconSunny from '@/components/icons/IconSunny.vue';
import moment from 'moment';
import feather from 'feather-icons';
import { IForecast } from '@/interfaces';
import { format, toDateTime } from '@/util/time';

@Component({
  components: {
    IconSunny
  },
  computed: {
    dateTime: {
      get() {
        return toDateTime(this.$props.forecast.dt);
      }
    },
    dateDiff: {
      get() {
        const dt = this.dateTime;
        const now = moment();
        return moment.duration(now.diff(dt));
      }
    },
    past: {
      get() {
        const diff = this.dateDiff;
        console.log('past', diff);
        return parseInt(diff.get('hours')) > 3;
      }
    },
    current: {
      get() {
        const diff = this.dateDiff;
        const hours = parseInt(diff.get('hours'));
        console.log('current', hours);
        return hours <= 3 && hours > 0;
      }
    }
  }
})
export default class Forecast extends Vue {
  @Prop() public forecast: IForecast | null;
  @Prop() private offset!: number;

  public mounted() {
    feather.replace();
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
