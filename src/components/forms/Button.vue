<template>
  <div>
    <a v-if="$props.link" :href="$props.link" :class="linkClass">
      <slot></slot>
    </a>
    <button v-else :class="buttonClass">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({}) private link!: string;

  get linkClass(): string {
    return 'mx-4 my-2 p-2 bg-blue-500 text-white font-semibold rounded';
  }

  get buttonClass(): string {
    return this.linkClass;
  }
}
</script>
