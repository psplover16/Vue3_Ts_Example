import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Task } from '@/types/task';
import { fetchTasks, createTask, updateTask, deleteTask } from '@/api/taskApi';

// Task store：示範 CRUD 與狀態管理（setup 語法）
export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const completedCount = computed(() => tasks.value.filter((t) => t.completed).length);

  const loadTasks = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      tasks.value = await fetchTasks();
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err);
    } finally {
      isLoading.value = false;
    }
  };

  const addTask = async (payload: Task) => {
    const created = await createTask(payload);
    tasks.value = [...tasks.value, created];
  };

  const editTask = async (payload: Task) => {
    const updated = await updateTask(payload);
    tasks.value = tasks.value.map((task) => (task.id === updated.id ? updated : task));
  };

  const removeTask = async (taskId: number) => {
    await deleteTask(taskId);
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
  };

  return {
    tasks,
    isLoading,
    error,
    completedCount,
    loadTasks,
    addTask,
    editTask,
    removeTask
  };
});
