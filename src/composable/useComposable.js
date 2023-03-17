import { ref } from "vue";

export default function useComposable(){
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      if (count.value > 0) {
        count.value--;
      }
    };

    const reset = () => {
      count.value = 0
     };

    return {
      count,
      increment,
      decrement,
      reset,
    };
}