import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators';
import { fetchForecastToday, fetchLastRun } from '@/util/api';
import { IDate, ILastRun } from '@/interfaces';

@Module({ name: 'forecast' })
export default class ForecastStore extends VuexModule {
  public dayLoading: boolean = true;
  public day: IDate | null = null;
  public lastRunLoading: boolean = true;
  public lastRun: ILastRun | null = null;

  @Mutation
  public setDay(day: IDate) {
    this.day = day;
    this.dayLoading = false;
  }
  @Mutation
  public setLastRun(lastRun: ILastRun) {
    this.lastRun = lastRun;
    this.lastRunLoading = false;
  }

  @MutationAction({ mutate: ['day', 'lastRun'] })
  public async fetchAll() {
    const day: IDate = await fetchForecastToday().then(
      (dayResp: IDate) => dayResp,
    );
    const lastRun: ILastRun = await fetchLastRun().then(
      (lastRunResp: ILastRun) => lastRunResp,
    );
    return {
      day,
      lastRun,
    };
  }
}
