<template>
  <div class="hello">
    <button @click="showNum()">点击这里测试</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private showNum() {
    window.js2DotNet('CountNum').then((r: number) => {
      alert(r);
    });
  }
}
</script>
