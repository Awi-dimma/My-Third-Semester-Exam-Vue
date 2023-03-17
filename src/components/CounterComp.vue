<template>
    <h1>Counter App</h1>
    <div>
      <h2>{{ count }}</h2>
      <div>
        <button @click="increment">+</button>
        <input type="number" v-model="count" />
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  import useComposable from '../composable/useComposable';
  
  export default {
    name: 'CounterComp',
    setup() {
      const { count, increment, decrement, reset } = useComposable();
  
      return {
        count,
        increment,
        decrement,
        reset,
      };
    },
  };
  </script>
  