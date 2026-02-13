import { describe, it, expect } from 'vitest';

// 測試目的：確認 TaskItem 元件可被正確引入
describe('TaskItem', () => {
  it('should be defined as a module', async () => {
    const mod = await import('@/components/TaskItem.vue');
    expect(mod).toBeDefined();
  });
});
