<script setup lang="ts">
import {
  PracticeSquareConfig,
  PracticeFunc,
  PracticeSp1,
  PracticeDictionary,
  PracticeReadOnlyDictionary,
  PracticeTimeout,
  PracticeArr,
  ClockConstructor,
  ClockInterface,
} from "@/types/typePractice";
import { useLogger } from "@/composables/useLogger";
const logger = useLogger();
import classPractice from "@/composables/classPractice";

let tmpConfig = {
  color: "red",
  width: 100,
  note: "This is a square",
  notes: ["Note 1", "Note 2"],
};
// 若直接把 tmpConfig 的值賦予，會報錯，因為 PracticeSquareConfig 沒有 notes 屬性，但 tmpConfig 有，所以需要先定義一個變量來存儲 tmpConfig 的值，再把這個變量賦予 interfacePracticeConfig
const interfacePracticeConfig: PracticeSquareConfig = tmpConfig;

const interfacePracticeFunc: PracticeFunc = (color, width, note) => {
  console.log(`Color: ${color}, Width: ${width}, Note: ${note}`);
  return true;
};

// 屬性添加測試
const prototypePractice: PracticeSp1 = (startNum) => {
  return `startNum: ${startNum}}`;
};
prototypePractice.interval = 1000;
prototypePractice.reset = () => {};

function practiceSpecialTest(): PracticeSp1 {
  let specialTest2 = <PracticeSp1>function (start: number) {};
  specialTest2.interval = 123;
  specialTest2.reset = function () {};
  return specialTest2;
}

// 設置timeoiut測試
const setTimeoutTest: PracticeTimeout = (startNum, interval, callback) => {
  return setTimeout(() => {
    console.log("Timeout test:", startNum);
    callback(startNum + 1);
  }, interval);
};

class Clock implements ClockInterface {
  // currentTime: Date = new Date();
  currentTime: Date;
  constructor(hour: number, minute: number) {
    this.currentTime = new Date();
    if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60) {
      this.currentTime.setHours(hour, minute);
    }
  }
  setTime(d: Date): void {
    this.currentTime = d;
  }
  destroy() {
    // 如果沒觸發，只要沒引用，垃圾回收機制就會自動回收這個物件，所以不會造成內存泄漏
    console.log("Clock destroyed");
  }
}
//
const handleClick = (types: string): void => {
  console.log("Clicked!", types);
  switch (types) {
    case "InterfacePractice":
      // case不會自動形成區塊作用域，所以需要手動加上區塊
      {
        const { color, width, note } = interfacePracticeConfig;
        // 可選參數
        const status = interfacePracticeFunc(color);
        console.log("interfacePracticeFuncStatus:", status);

        // 物件測試
        const arrTest: PracticeDictionary = [];
        arrTest[0] = 123;
        // arrTest.push(456); // 不可以，因為 PracticeDictionary 的索引類型是 number，所以只能使用數字索引來添加元素，不能使用 push 方法來添加元素，因為 push 方法會將元素添加到數組的末尾，而不是指定的索引位置。
        console.log("arrTest", arrTest);

        // 陣列測試
        // const arrTest2: PracticeArr = [];
        // const arrTest2: string[] = [];
        const arrTest2: Array<string> = [];
        arrTest2.push("hello");
        console.log("arrTest2", arrTest2);

        // readonlyArr
        const readOnlyDict: PracticeReadOnlyDictionary = { length: 123 };
        console.log("readOnlyDict", readOnlyDict);
        // readOnlyDict.push(123); // 會報錯，因為 length 是 readonly 的

        prototypePractice(10);
        let sili: PracticeSp1 = practiceSpecialTest();
        sili(20);
        //
        setTimeoutTest(1, 1000, (n) => {
          console.log("Timeout test:", n);
        });
        // Clock測試
        const clockClass: ClockConstructor = Clock;
        const clock = new clockClass(10, 30);
        console.log("Current time:", clock.currentTime);
        setTimeout(() => {
          clock.setTime(new Date());
          console.log("Updated time:", clock.currentTime);
        }, 2000);
        //
      }
      break;
    case "ClassPractice":
      classPractice();
      logger.log("Hello");
      break;
    default:
      console.log("Unknown type");
  }
};
</script>

<template>
  <div class="clickBtn" @click="handleClick('InterfacePractice')">
    InterfacePractice
  </div>
  <div class="clickBtn" @click="handleClick('ClassPractice')">
    ClassPractice
  </div>
</template>

<style>
.clickBtn {
  display: inline-block;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
