# Props / Emits 教學模組

此模組示範 Vue3 的「父子元件溝通」：

- 子元件使用 `defineProps` 接收資料
- 子元件使用 `defineEmits` 回報事件
- 父元件接收事件並更新狀態

本專案使用 `TaskItem` 作為示範：
- Props：`task`（任務資料）
- Emits：`edit`、`remove`、`toggle`

對應檔案：
- `src/components/TaskItem.vue`
- `src/views/CrudView.vue`

學習重點：
- Props 型別應明確定義（避免 any）
- Emits 事件型別應明確定義
- 子元件不直接改變外部資料，透過事件通知父元件
