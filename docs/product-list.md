# 功能模組：ProductList

此模組示範 Vue3 + TypeScript 的常見應用場景：

- 使用 Composition API（`ref`、`onMounted`）
- 型別嚴格定義（`Product` 介面）
- axios API 呼叫（封裝在 `/src/api/userApi.ts`）
- 防衛式錯誤處理

重點：
- 所有狀態都以 `ref` 管理，避免使用全域變數
- API 回傳必須先檢查，避免 null/undefined 造成渲染錯誤
