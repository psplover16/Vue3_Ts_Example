import type { Task } from '@/types/task';

// 範例任務資料（教學用途）
export const mockTasks: Task[] = [
  { id: 1, title: '整理專案架構', description: '建立 docs/tests/examples', completed: false },
  { id: 2, title: '補上型別', description: '移除 any，改用介面', completed: true }
];
