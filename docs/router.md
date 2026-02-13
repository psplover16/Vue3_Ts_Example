# Router 模組說明

此模組示範 Vue Router 的基本使用：

- `createRouter` + `createWebHistory`
- `RouteRecordRaw` 型別
- `RouterLink` / `RouterView` 的使用

重點：
- 路由設定集中在 `src/router/index.ts`
- 導覽列放在 `App.vue`，保持 UI 結構清楚

權限控制示範：
- 在 `routes.ts` 設定 `meta.requiresAuth`
- 在 `router/index.ts` 使用 `beforeEach` 攔截
