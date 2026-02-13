# Java 與 TypeScript 的差異整理（教學版）

以下整理你目前具備的 Java 知識，對照 TypeScript 的差異與對應方式。

## 1. 型別系統（Type System）
- Java：編譯期強型別，所有變數必須宣告型別。
- TypeScript：也是編譯期強型別，但會編譯成 JavaScript，因此執行時仍為動態型別。

對照範例：
- Java：`int count = 1;`
- TS：`const count: number = 1;`

差異重點：
- TypeScript 在編譯後沒有型別資訊（型別擦除），而 Java 仍保有類別結構。

## 2. Class / Interface / extends / implements
- Java：class 與 interface 嚴格分離，`implements` 必須完整實作。
- TS：`interface` 更像「型別規格」，可擴充、合併（Declaration Merging）。

對照範例：
```ts
interface User {
  id: number;
  name: string;
}
```

## 3. 泛型（Generics）
- Java：`List<String>`
- TypeScript：`Array<string>` 或 `string[]`

TS 更常見的泛型用法：
```ts
function wrap<T>(value: T): T[] {
  return [value];
}
```

## 4. 型別轉換（Type Casting）
- Java：`(int) value`
- TS：`value as number`

## 5. null / undefined
- Java：只有 `null`
- TS：有 `null` 和 `undefined`，且在 strict 模式下必須明確處理

## 6. 存取修飾子（Access Modifiers）
- Java：`public / protected / private`
- TS：也支援，但只是編譯期檢查，執行時不會阻止存取

## 7. static / final
- Java：`static`、`final`
- TS：有 `static`，但 `final` 對應 `readonly`

## 8. 型別推論（Type Inference）
- Java：推論有限（`var` Java 10+）
- TS：推論廣泛（大多數情況不必重複宣告型別）

## 9. 例外處理（Exception）
- Java：必須處理 `checked exception`
- TS：沒有 checked exception，只能用 `try/catch`

## 10. 執行環境差異
- Java：JVM
- TypeScript：瀏覽器/Node.js（編譯成 JS）

## 小結
TypeScript 是「具備型別系統的 JavaScript」，它的型別檢查只存在於編譯期，最終仍會輸出 JavaScript。Java 則是執行期仍保留型別結構。對於熟悉 Java 的讀者，TypeScript 的 class/interface 概念會比較容易理解，但需要注意：**TS 型別只在開發時有效，執行時會被移除**。
