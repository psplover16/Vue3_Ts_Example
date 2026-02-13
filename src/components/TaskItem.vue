<script setup lang="ts">
import type { Task } from '@/types/task';

// 子元件 Props：從父元件接收任務資料
const props = defineProps<{ task: Task }>();

// 子元件 Emits：通知父元件事件
const emit = defineEmits<{
  (event: 'edit', task: Task): void;
  (event: 'remove', taskId: number): void;
  (event: 'toggle', task: Task): void;
}>();

const handleEdit = () => {
  emit('edit', props.task);
};

const handleRemove = () => {
  emit('remove', props.task.id);
};

const handleToggle = () => {
  emit('toggle', props.task);
};
</script>

<template>
  <div class="border rounded p-3 flex items-start justify-between">
    <div>
      <div class="font-medium">
        <input type="checkbox" :checked="props.task.completed" @change="handleToggle" />
        <span :class="{ 'line-through text-gray-400': props.task.completed }">
          {{ props.task.title }}
        </span>
      </div>
      <div class="text-sm text-gray-500">{{ props.task.description }}</div>
    </div>
    <div class="flex gap-2">
      <button class="text-blue-600" @click="handleEdit">編輯</button>
      <button class="text-red-600" @click="handleRemove">刪除</button>
    </div>
  </div>
</template>
