import axios from 'axios';

// API 基本設定：採用 axios，並將 baseURL 放在常數（符合專案規範）
export const API_BASE_URL = 'https://api.example.com'; // 範例主機，實際使用時請修改

// 建立 axios instance，之後所有 API 呼叫統一使用此 instance，方便統一處理攔截器、錯誤
export const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000
});

// 這裡可加入請求/回應攔截器，例如統一加上 Authorization header
// http.interceptors.request.use((config) => { ... });
