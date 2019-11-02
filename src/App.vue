<template>
  <div>
    <input type="text" v-model="counter">
    <p>{{counter}}</p>
    <button @click="counter++">Click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
</script>
<style>
@import "styles/index.scss";
</style>
