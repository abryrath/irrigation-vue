<template>
  <div>
    <button type="primary">Run Now</button>
    Last Run: {{ $props.lastRun }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class ManualRunContainer extends Vue {
  @Prop({}) private lastRun!: string;
}
</script>
