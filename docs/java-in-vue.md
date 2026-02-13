# Java 知識在 Vue + TypeScript 的常見應用（詳細版）

此文件專門說明你已具備的 Java 知識如何在 Vue + TypeScript 中落地應用，並提供具體對照與使用情境。重點在於「觀念轉換」與「實務對應」。

---

## 1. 類別（Class）與物件導向
**Java 概念：**
- 使用 class 封裝資料與方法
- 以 new 建立物件實體

**Vue + TypeScript 對應：**
- Vue 中的 UI 組件通常以 `SFC (.vue)` 表示，不一定要用 class，但概念上仍是「封裝」
- 若需要 OO 風格，可用 class 來定義資料結構、domain model 或 service

**實務情境：**
- 將 API 回傳資料封裝為 class 或 interface
- 為特定 domain（例如 User / Product）建立資料模型

---

## 2. Interface / implements
**Java 概念：**
- interface 描述方法規格
- class 透過 implements 強制實作

**TypeScript 對應：**
- interface 描述資料結構（型別）
- 不一定用 class implements，但可用 interface 讓函式輸入/輸出更明確

**實務情境：**
- API 回傳型別定義
- Store 或 composable 回傳值定義

---

## 3. 泛型（Generics）
**Java 概念：**
- List<String>, Map<K,V>

**TypeScript 對應：**
- Array<string>
- 泛型函式、泛型型別工具（如 `Promise<T>`）

**實務情境：**
- API 回傳型別 `Promise<T>`
- 封裝函式用泛型避免重複型別定義

---

## 4. 例外處理（Exception Handling）
**Java 概念：**
- try/catch + checked exception

**TypeScript 對應：**
- 只有 runtime error（沒有 checked exception）
- 仍可使用 try/catch 做防衛式錯誤處理

**實務情境：**
- axios 呼叫失敗時捕捉錯誤
- UI 顯示錯誤訊息（例如 API 載入失敗）

---

## 5. Access Modifier（public / private）
**Java 概念：**
- public / private / protected

**TypeScript 對應：**
- class 也支援 public / private / protected
- 注意：TS 是編譯期檢查，runtime 不會阻擋存取

**實務情境：**
- service class 中保護內部方法
- 僅對外暴露 public method

---

## 6. static 與常數
**Java 概念：**
- static 常數、class method

**TypeScript 對應：**
- class static
- 常數使用 `const`，命名採 `UPPER_CASE`

**實務情境：**
- API_BASE_URL 常數集中管理
- 模組內工具方法使用 static

---

## 7. Stream / Collection 操作 vs JS 陣列方法
**Java 概念：**
- Stream API（map/filter/reduce）

**TypeScript 對應：**
- JS 原生陣列方法 `map`, `filter`, `reduce`

**實務情境：**
- API 回傳資料轉換
- 過濾列表顯示內容

---

## 8. DTO / VO 的概念
**Java 概念：**
- DTO/VO 封裝資料結構

**TypeScript 對應：**
- interface 或 type 直接代表 DTO

**實務情境：**
- 建立 `Product`, `Task` 介面，作為資料規格

---

## 9. 專案結構對應
**Java 專案習慣：**
- controller / service / repository 分層

**Vue 專案對應：**
- `src/api/`：類似 service 層
- `src/stores/`：類似狀態管理與 service 結合
- `src/views/`：相當於 UI 層

---

## 10. 測試觀念
**Java 概念：**
- JUnit、Mockito

**Vue + TS 對應：**
- Vitest / Jest
- Mock API / Mock Store

**實務情境：**
- 測試 Store action 是否正確更新 state
- 測試驗證工具是否回傳正確結果

---

## 小結
Java 的核心知識（型別、介面、泛型、分層架構）在 Vue + TypeScript 仍然非常實用，只是形式上更偏向「函式式 + 組件式」的寫法。理解這些對應關係後，你會更容易把 Java 的工程思維帶入前端專案。
