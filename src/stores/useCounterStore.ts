import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// Counter store：示範基本 state / getter / action（setup 語法更直觀）
export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);

  // getter 類似 Java 的 getter 方法
  const doubleCount = computed(() => count.value * 2);

  // action 類似 Java 的 method
  const increment = () => {
    count.value += 1;
  };

  const decrement = () => {
    count.value -= 1;
  };

  return {
    count,
    doubleCount,
    increment,
    decrement
  };
});
