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

export interface PracticeSp1 {
  (startNum: number): string;
  interval: number;
  reset(): void;
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

export interface PracticeArr extends Array<string> {}
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
