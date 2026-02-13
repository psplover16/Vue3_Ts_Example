import { createPinia } from 'pinia';

// 單一 Pinia 實例，提供給 main 與 router guard 使用
export const pinia = createPinia();
