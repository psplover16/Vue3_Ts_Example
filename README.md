# TS Vue Learning 專案

這是一個用來學習 Vue3 + TypeScript + Vite 的專案骨架，依照 `copilot-instructions.md` 的規範建立，重點放在程式碼品質、型別設計與實務教學。

主要特色：
- Vue3 + Composition API + TypeScript
- Vite 開發環境
- Tailwind CSS（樣式為主）
- axios 統一 API 呼叫
- 範例元件、文件、測試範例
- Router / Pinia / 表單驗證 / CRUD 教學

快速啟動（PowerShell）:

```powershell
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 執行測試
npm run test

# ESLint 檢查
npm run lint
```

請參考 `docs/` 取得模組說明與使用範例。

模組清單：
- 產品列表（ProductList）
- Props / Emits（父子元件溝通）
- Router（路由）
- Store（Pinia）
- 表單驗證
- CRUD 任務管理
- Java vs TypeScript 差異說明（`docs/java-vs-typescript.md`）

對應文件與範例：
- ProductList：`docs/product-list.md` / `examples/product-list.md`
- Props / Emits：`docs/props-emits.md` / `examples/props-emits.md`
- Router：`docs/router.md` / `examples/router.md`
- Store：`docs/store.md` / `examples/store.md`
- 表單驗證：`docs/form-validation.md` / `examples/form-validation.md`
- CRUD：`docs/crud.md` / `examples/crud.md`

---

詳細導讀路線（建議學習順序 + 主要學習內容）：

1. 專案總覽與入口
	- 主要學習內容：專案結構、啟動流程、Vue 入口與布局
	- `README.md`
	- `docs/overview.md`
	- `src/main.ts`
	- `src/App.vue`

2. 基礎元件與資料顯示
	- 主要學習內容：Composition API、型別定義、API 呼叫、防衛式錯誤處理
	- `docs/product-list.md`
	- `src/components/ProductList.vue`
	- `src/api/userApi.ts`
	- `src/types/product.ts`
	- `src/assets/js/mockProducts.ts`

3. Props / Emits 元件互動
	- 主要學習內容：defineProps、defineEmits、父子溝通
	- `docs/props-emits.md`
	- `src/components/TaskItem.vue`
	- `src/views/CrudView.vue`
	- `examples/props-emits.md`

4. Router 與頁面結構
	- 主要學習內容：路由配置、RouterLink/RouterView、權限 guard
	- `docs/router.md`
	- `src/router/routes.ts`
	- `src/router/index.ts`
	- `src/views/HomeView.vue`
	- `src/views/AboutView.vue`

5. Store（Pinia）與狀態管理
	- 主要學習內容：state/getter/action、組件與 store 的互動
	- `docs/store.md`
	- `src/stores/useCounterStore.ts`
	- `src/stores/useAuthStore.ts`
	- `src/stores/index.ts`

6. 表單驗證與型別工具
	- 主要學習內容：reactive/computed、表單驗證、型別工具設計
	- `docs/form-validation.md`
	- `src/views/FormValidationView.vue`
	- `src/utils/validationUtils.ts`
	- `tests/validationUtils.test.ts`

7. CRUD 實作與 Mock API
	- 主要學習內容：CRUD 流程、狀態更新、mock API 測試
	- `docs/crud.md`
	- `src/views/CrudView.vue`
	- `src/stores/useTaskStore.ts`
	- `src/api/taskApi.ts`
	- `src/types/task.ts`
	- `tests/taskStore.test.ts`

8. Java 與 TypeScript 對照理解
	- 主要學習內容：型別系統、介面/泛型對照、Vue 應用場景
	- `docs/java-vs-typescript.md`
	- `docs/java-in-vue.md`

9. 測試與品質檢查
	- 主要學習內容：單元測試思維、品質門檻
	- `tests/*.test.ts`
	- `npm run test`
	- `npm run lint`

