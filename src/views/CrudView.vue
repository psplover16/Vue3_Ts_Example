<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useTaskStore } from "@/stores/useTaskStore";
import TaskItem from "@/components/TaskItem.vue";
import type { Task } from "@/types/task";

const taskStore = useTaskStore();

const titleInput = ref<string>("");
const descriptionInput = ref<string>("");
const editingTaskId = ref<number | null>(null);

const nextId = computed(() => {
  const ids = taskStore.tasks.map((task: Task) => task.id);
  return ids.length === 0 ? 1 : Math.max(...ids) + 1;
});

const resetForm = () => {
  titleInput.value = "";
  descriptionInput.value = "";
  editingTaskId.value = null;
};

const handleSubmit = async () => {
  if (titleInput.value.trim() === "") {
    return;
  }

  const payload: Task = {
    id: editingTaskId.value ?? nextId.value,
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    completed: false,
  };

  if (editingTaskId.value) {
    await taskStore.editTask(payload);
  } else {
    await taskStore.addTask(payload);
  }
  resetForm();
};

const handleEdit = (task: Task) => {
  editingTaskId.value = task.id;
  titleInput.value = task.title;
  descriptionInput.value = task.description;
};

const toggleCompleted = async (task: Task) => {
  await taskStore.editTask({ ...task, completed: !task.completed });
};

onMounted(async () => {
  await taskStore.loadTasks();
});
</script>

<template>
  <section class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-medium mb-4">CRUD 範例：任務管理</h2>

    <div class="mb-4 text-sm text-gray-600">
      已完成 {{ taskStore.completedCount }} 筆，共
      {{ taskStore.tasks.length }} 筆
    </div>

    <form class="space-y-3" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-sm font-medium" for="task-title"
          >任務標題</label
        >
        <input
          id="task-title"
          v-model="titleInput"
          type="text"
          class="w-full border px-3 py-2 rounded"
          placeholder="請輸入任務標題"
        />
      </div>
      <div>
        <label class="block text-sm font-medium" for="task-desc"
          >任務描述</label
        >
        <textarea
          id="task-desc"
          v-model="descriptionInput"
          class="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>
      <div class="flex gap-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          {{ editingTaskId ? "更新" : "新增" }}
        </button>
        <button
          class="bg-gray-200 px-4 py-2 rounded"
          type="button"
          @click="resetForm"
        >
          清除
        </button>
      </div>
    </form>

    <div v-if="taskStore.isLoading" class="mt-4 text-gray-500">載入中...</div>
    <div v-if="taskStore.error" class="mt-4 text-red-500">
      {{ taskStore.error }}
    </div>

    <div v-if="!taskStore.isLoading" class="mt-4 space-y-2">
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @edit="handleEdit"
        @remove="taskStore.removeTask"
        @toggle="toggleCompleted"
      />
    </div>
  </section>
</template>
