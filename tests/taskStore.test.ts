import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTaskStore } from '@/stores/useTaskStore';

describe('task store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should load tasks from mock data', async () => {
    const store = useTaskStore();
    await store.loadTasks();
    expect(store.tasks.length).toBeGreaterThan(0);
  });

  it('should add and remove task', async () => {
    const store = useTaskStore();
    await store.loadTasks();
    const initialCount = store.tasks.length;

    await store.addTask({
      id: 999,
      title: '測試任務',
      description: '新增任務',
      completed: false
    });

    expect(store.tasks.length).toBe(initialCount + 1);

    await store.removeTask(999);
    expect(store.tasks.length).toBe(initialCount);
  });

  it('should update task status', async () => {
    const store = useTaskStore();
    await store.loadTasks();
    const firstTask = store.tasks[0];
    const updated = { ...firstTask, completed: !firstTask.completed };

    await store.editTask(updated);
    expect(store.tasks[0].completed).toBe(updated.completed);
  });
});
