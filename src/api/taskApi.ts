import { http } from './index';
import type { Task } from '@/types/task';
import { mockTasks } from '@/assets/js/mockTasks';

// 教學用：預設使用 mock 資料，避免沒有後端造成錯誤
const USE_MOCK_DATA = true;

export async function fetchTasks(): Promise<Task[]> {
  if (USE_MOCK_DATA) {
    return mockTasks.map((task) => ({ ...task }));
  }

  // 若有真實後端，可改成以下方式
  const resp = await http.get<{ data: Task[] }>('/tasks');
  if (!resp?.data?.data) {
    throw new Error('取得任務失敗');
  }
  return resp.data.data.map((task) => ({ ...task }));
}

export async function createTask(payload: Task): Promise<Task> {
  if (USE_MOCK_DATA) {
    return { ...payload };
  }
  const resp = await http.post<{ data: Task }>('/tasks', payload);
  if (!resp?.data?.data) {
    throw new Error('新增任務失敗');
  }
  return resp.data.data;
}

export async function updateTask(payload: Task): Promise<Task> {
  if (USE_MOCK_DATA) {
    return { ...payload };
  }
  const resp = await http.put<{ data: Task }>(`/tasks/${payload.id}`, payload);
  if (!resp?.data?.data) {
    throw new Error('更新任務失敗');
  }
  return resp.data.data;
}

export async function deleteTask(taskId: number): Promise<{ success: boolean }>
{
  if (USE_MOCK_DATA) {
    return { success: true };
  }
  const resp = await http.delete<{ success: boolean }>(`/tasks/${taskId}`);
  if (!resp?.data) {
    throw new Error('刪除任務失敗');
  }
  return resp.data;
}
