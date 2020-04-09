import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import { fetchForecastToday, fetchLastRun } from '@/util/api';
import { IDate, ILastRun } from '@/interfaces';

@Module({ name: 'forecast' })
export default class ForecastStore extends VuexModule {
  dayLoading: boolean = true;
  day: IDate | null = null;
  lastRunLoading: boolean = true;
  lastRun: ILastRun | null = null;

  @Mutation
  setDay(day: IDate) {
    this.day = day;
    this.dayLoading = false;
  }
  @Mutation
  setLastRun(lastRun: ILastRun) {
    this.lastRun = lastRun;
    this.lastRunLoading = false;
  }

  @MutationAction({ mutate: ['day', 'lastRun']})
  async fetchAll() {
    const day: IDate = await fetchForecastToday().then((day: IDate) => day);
    const lastRun: ILastRun = await fetchLastRun().then((lastRun: ILastRun) => lastRun);
    return {
      day,
      lastRun,
    };
  }
}
