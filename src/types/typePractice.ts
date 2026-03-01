export interface PracticeSquareConfig {
  color: string;
  width: number;
  note?: string;
  //   [propName: string]: unknown; // 允許額外的屬性，類似於 index signature
}

// 1. interface 相同名稱會合併，type不會
// 2. interface 可以被擴展/繼承，type 用 &（intersection）
// 3. interface 主要描述「物件結構」，type 可以描述「物件結構」也可以描述「函式類型」等其他類型
// 4. eslint 規則：interface 用於描述物件結構，type 用於描述函式類型等其他類型，這是社區的慣例，但不是語言本身的限制

// export interface PracticeFunc {
//   (_color: string, _width: number, _note?: string): boolean;
// }
export type PracticeFunc = (
  parameter1: string,
  parameter2?: number,
  parameter3?: string,
) => boolean;

// 型別描述工具」，用來描述物件的形狀
export interface PracticeSp1 {
  (startNum: number): string; // 函式類型，內部有 function (startNum: number) { return "xxx"; }，這東西
  // [index: number]: number; // 索引類型，用數字 key 存取時，回傳 number obj[0] → number
  // readonly [test: string]: number; // 索引類型，任何 string key 都是 readonly number  obj["abc"] → number（不能改）
  interval: number; // 屬性類型，obj.interval → number
  reset(): void; // 方法類型，obj.reset() → void ，這東西裡面有一個函數 reset，呼叫它會回傳 void（沒有回傳值）
}

// eslint-disable-next-line @typescript-eslint/prefer-function-type
export interface PracticeTimeout {
  (
    startNum: number,
    interval: number,
    callback: (n: number) => void,
  ): ReturnType<typeof setTimeout>;
}
// export type PracticeTimeout = (
//   startNum: number,
//   interval: number,
//   callback: (n: number) => void,
// ) => ReturnType<typeof setTimeout>;

export interface PracticeDictionary {
  //   [index: string]: string;
  [index: number]: number; // 不行，用class的extends的會很明顯，數字索引返回必須是字串索引返回值的子類型，因為數字索引會被轉換成字串索引，所以數字索引返回值必須是字串索引返回值的子類型
  length: number; // 可以，length是number类型，保證存在用
  //   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

export interface PracticeReadOnlyDictionary {
  readonly [index: string]: number;
  length: number; // 仍視為readonly
}

export interface PracticeArr extends Array<string> { }
// export type PracticeArr = string[];

// 做class範例
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }

export type ClockConstructor = new (
  hourS: number,
  minuteS: number,
) => ClockInterface;

export interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// 繼承的混合
class Control {
  private state: any;
}

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface UI extends Shape, PenStroke {
  sideLength: number;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl, UI {
  select() { return 123 }
  penWidth: number;
  sideLength: number;
  color: string;
  constructor(penWidth: number, sideLength: number, color: string) {
    super();
    this.penWidth = penWidth;
    this.sideLength = sideLength;
    this.color = color;
  }
}

// 介面如果繼承了某個 class，而那個 class 有 private / protected 成員，那麼「能實作該介面」的 class，必須同時是那個 class 的子類別（或同一繼承鏈上），否則就算你把方法都寫齊也不行
// class Image implements SelectableControl {
//   select() { }
// }
// 