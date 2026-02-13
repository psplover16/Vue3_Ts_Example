import { describe, it, expect } from 'vitest';
import { fetchProducts } from '@/api/userApi';

// 測試說明：此為示範測試檔，若沒有啟用實際 API，建議使用 mock 或改為測試純函式
describe('userApi', () => {
  it('fetchProducts should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
});
