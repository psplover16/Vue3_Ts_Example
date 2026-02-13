# API 模組說明

此模組統一處理 API 呼叫與 axios 設定，重點如下：

- API 基底網址 `API_BASE_URL` 集中管理
- 使用 axios instance，方便未來加入攔截器
- 所有 API 檔案集中在 `/src/api/`

安全與穩定性提醒：
- 請避免在前端暴露敏感金鑰
- 請使用防衛式程式碼檢查 API 回傳內容
- 教學期間若沒有後端，可改用 mock 資料（見 `src/assets/js/`）
