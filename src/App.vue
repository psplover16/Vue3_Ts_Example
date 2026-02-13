<script setup lang="ts">
// App 根組件
// 此專案示範 Composition API 與 TypeScript 的搭配使用
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <header class="p-4 bg-white shadow">
      <div class="container mx-auto">
        <h1 class="text-2xl font-semibold">TS Vue Learning 專案範例</h1>
        <p class="text-sm text-gray-500">依 copilot-instructions.md 規範建立</p>
        <nav class="mt-3 flex flex-wrap gap-3 text-sm">
          <RouterLink class="text-blue-600" to="/">首頁</RouterLink>
          <RouterLink class="text-blue-600" to="/forms">表單驗證</RouterLink>
          <RouterLink class="text-blue-600" to="/crud">CRUD 範例</RouterLink>
          <RouterLink class="text-blue-600" to="/about">關於</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container mx-auto p-4">
      <RouterView />
    </main>

    <footer class="p-4 text-center text-sm text-gray-500">
      <span>學習專案 — Vue3 + TypeScript + Vite</span>
    </footer>
  </div>
</template>
