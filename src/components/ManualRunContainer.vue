<template>
  <div>
    <Button>Run Now</button>
    Last Run: {{ $props.lastRun }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/forms/Button.vue';

@Component({
  components: {
    Button,
  }
})
export default class ManualRunContainer extends Vue {
  @Prop({}) private lastRun!: string;
}
</script>
