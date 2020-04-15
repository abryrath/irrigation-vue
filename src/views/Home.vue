<template>
  <div class="home">
    <!-- <ForecastContainer /> -->
    <ManualRunContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DayOverview from '@/components/DayOverview.vue';
import ForecastContainer from '@/components/ForecastContainer.vue';
import ManualRunContainer from '@/components/ManualRunContainer.vue';
import { IDate } from '../interfaces';
import { fetchForecastToday } from '../util/api';

@Component({
  components: {
    DayOverview,
    ForecastContainer,
    ManualRunContainer,
  },
})
export default class Home extends Vue {

}
</script>
