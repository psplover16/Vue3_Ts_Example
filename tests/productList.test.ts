import { describe, it, expect } from 'vitest';

// 示範測試：確保 ProductList 元件檔案可被編譯
describe('ProductList', () => {
  it('should be defined as a module', async () => {
    const mod = await import('@/components/ProductList.vue');
    expect(mod).toBeDefined();
  });
});
