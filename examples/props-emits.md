# Props / Emits 範例

```vue
<template>
  <TaskItem :task="task" @edit="handleEdit" @remove="handleRemove" @toggle="handleToggle" />
</template>

<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue';
import type { Task } from '@/types/task';

const task: Task = {
  id: 1,
  title: '示範任務',
  description: 'Props/Emits 範例',
  completed: false
};

const handleEdit = (payload: Task) => {
  // 編輯邏輯
};

const handleRemove = (taskId: number) => {
  // 刪除邏輯
};

const handleToggle = (payload: Task) => {
  // 切換完成狀態
};
</script>
```
