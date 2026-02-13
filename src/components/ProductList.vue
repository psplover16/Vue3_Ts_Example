<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchProducts } from "@/api/userApi";
import type { Product } from "@/types/product";

// 設計契約（Contract）
// inputs: 無
// outputs: 會在畫面上顯示一組 Product 陣列
// 錯誤模式: 若 API 發生錯誤，顯示錯誤訊息

const products = ref<Product[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);

// 生命週期：載入後呼叫 API
onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetchProducts();
    products.value = res;
  } catch (err) {
    // 防衛式程式碼：將錯誤轉成字串顯示
    error.value = err instanceof Error ? err.message : String(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="bg-white p-4 rounded shadow">
    <div v-if="isLoading" class="text-gray-500">載入中...</div>
    <div v-else>
      <div v-if="error" class="text-red-500">錯誤：{{ error }}</div>
      <ul v-else class="space-y-2">
        <li
          v-for="p in products"
          :key="p.id"
          class="flex items-center justify-between"
        >
          <div>
            <div class="font-medium">{{ p.name }}</div>
            <div class="text-sm text-gray-500">價格：NT$ {{ p.price }}</div>
          </div>
          <div>
            <button class="bg-blue-500 text-white px-3 py-1 rounded">
              購買
            </button>
          </div>
        </li>
      </ul>
      <div v-if="products.length === 0" class="text-gray-500">目前沒有產品</div>
    </div>
  </div>
</template>

<style scoped>
/* 若需要額外樣式，可在此加入，但優先以 Tailwind 為主 */
</style>
