<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
import { useCounterStore } from "@/stores/useCounterStore";
import { useAuthStore } from "@/stores/useAuthStore";

// 取得 Pinia store，示範狀態管理
const counterStore = useCounterStore();
const authStore = useAuthStore();
</script>

<template>
  <section>
    <h2 class="text-xl font-medium mb-2">首頁：產品列表 + Store 範例</h2>
    <div class="mb-6">
      <div class="mb-2 text-gray-600">
        這裡示範 Pinia 的 state、getter 與 action（類似 Java
        的類別與方法設計概念）
      </div>
      <div class="flex items-center gap-3">
        <button
          class="bg-gray-200 px-3 py-1 rounded"
          @click="counterStore.decrement"
        >
          -
        </button>
        <span class="font-medium">Count: {{ counterStore.count }}</span>
        <span class="text-sm text-gray-500"
          >Double: {{ counterStore.doubleCount }}</span
        >
        <button
          class="bg-gray-200 px-3 py-1 rounded"
          @click="counterStore.increment"
        >
          +
        </button>
      </div>
    </div>
    <div class="mb-6">
      <div class="text-sm text-gray-600 mb-2">
        Router Guard 示範：CRUD 頁面需要登入才能進入
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm"
          >登入狀態：{{ authStore.isAuthenticated ? "已登入" : "未登入" }}</span
        >
        <button
          v-if="!authStore.isAuthenticated"
          class="bg-blue-500 text-white px-3 py-1 rounded"
          @click="authStore.login"
        >
          登入
        </button>
        <button
          v-else
          class="bg-gray-200 px-3 py-1 rounded"
          @click="authStore.logout"
        >
          登出
        </button>
      </div>
    </div>
    <ProductList />
  </section>
</template>
