import { http } from './index';
import type { Product } from '@/types/product';
import { mockProducts } from '@/assets/js/mockProducts';

// 教學用：當沒有後端時，改用 mock 資料
const USE_MOCK_DATA = true;

// 範例 API：取得產品列表
// 注意：為學習示範，實際 API 路徑與回傳格式請依後端調整
export async function fetchProducts(): Promise<Product[]> {
  if (USE_MOCK_DATA) {
    return mockProducts.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price
    }));
  }
  // 防衛式設計：確保回傳格式正確
  const resp = await http.get<{ data: Product[] }>('/products');
  if (!resp?.data?.data) {
    throw new Error('取得產品失敗');
  }
  // 依據規範，使用 map 處理重複/轉換邏輯，盡量避免 for/forEach
  const list = resp.data.data.map((item: Product) => ({
    id: item.id,
    name: item.name,
    price: item.price
  }));
  return list;
}
