// Type 操作型別
// 1. keyof: 取得「物件型別的所有 key」，組成 union 型別。
type UserTypes = {
    name: string
    age: number
}
type Keys = keyof UserTypes  // "name" | "age"

// 2. typeof 從「值」推導出「型別」。
const user = {
    name: "Gary",
    age: 30
}
type User = typeof user // { name: string age: number }
type userNameType = User["name"] // string

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

// 3. 型別層的 if / else。
type OnlyString<T> = T extends string ? T : never
type Result = OnlyString<string | number>

// todo
// 4. infer
// 5. Mapped Type

export default function getTypePractice() {
    // 注意：Keys/User/userNameType/Result 都是「型別」，編譯後不會存在於 runtime，不能直接拿來 console.log。
    // 需要用「值」搭配型別註記，才能在 runtime 印出來。
    const keys: Keys[] = ["name", "age"]
    const userName: userNameType = user.name
    const onlyString: Result = "hello"

    console.log("Keys (value)", keys);
    console.log("User (value)", user);
    console.log("userNameType (value)", userName);
    console.log("OnlyString<Result> (value)", onlyString);
    console.log("getValue", getValue(user, "name"));
    // console.log("",);
    // console.log("",);
    // console.log("",);
    // console.log("",);
    // console.log("",);
    // 
    // 
    function getBigIntExample() {
        const max = Number.MAX_SAFE_INTEGER
        console.log(max + 1 === max + 2); // true,是有問題的
        // 
        const big1 = 9007199254740991n
        const big2 = 9007199254740992n
        console.log(big1 + 1n === big2); // true
        // 
        const a = 10n
        const b = 5
        // console.log(a + b); // error
        console.log(a + BigInt(b)); // 15n
    }
    getBigIntExample();
    // void 有執行完，但沒有回傳值，實際上等價於 undefined。
    function voidPractice(): void {
        console.log("This function returns void");
    }
    // never 永遠不會回傳的函式 (永遠不會執行完)
    // 型別never用途: 1. 表示永遠不會有回傳值的函式（例如：永遠丟出錯誤的函式）。
    // 2. 在型別層面上，當一個條件型別的分支永遠不會成立時，可以使用never來表示該分支的型別。
    // never 是所有型別的子型別，但沒有東西可以賦給 never
    function neverPractice(message: string): never {
        throw new Error(message)
    }
    // var是 function scope，let/const 是 block scope
    // 
    function getSymbolExample() {
        const secretKey = Symbol(); // 每次呼叫 Symbol() 都會產生一個獨一無二的 Symbol 值，方便建立不會衝突的物件屬性。
        const user = {
            name: "Gary",
            [secretKey]: "hidden-value"
        }
        console.log(user.name)           // Gary
        console.log(user[secretKey])     // hidden-value
        console.log(Object.keys(user)); // ["name"]，不會列出 Symbol 屬性
        // 
        const ID: unique symbol = Symbol()
        type User = {
            [ID]: number
            name: string
        }
        const testUserSymbol: User = {
            [ID]: 123,
            name: "Test"
        }
        const testUserSymbol2 = {
            [ID]: 123,
            name: "Test"
        }
        console.log("Unique Symbol ID", testUserSymbol);
        console.log("Unique Symbol ID2", testUserSymbol2);
        // 以下是錯誤，因為
        // const another = Symbol()
        // const u: User = {
        //     // [another]: 123, // ❌ 錯
        //     name: "Gary"
        // }

    }
    getSymbolExample();







    // console.log("",);
    // console.log("",);
}