// let name1: string[] = ["kim", "park"];
// let name2: { name?: string } = { name: "kim" };
// let name3: string | number = "kim";

// function func(x: number): number {
//   return x * 2;
// }

// type Member1 = [number, boolean];
// let john: Member1 = [123, true];
// console.log(john);

// type Member2 = {
//   name: string;
// };
// let sam: Member2 = { name: "kim" };

// let names: string = "kim";
// let ages: number = 50;
// let marrige = true;

// //union 타입
// let members: (number | string)[] = [1, "2", 3];
// let member2: { a: string | number } = { a: "123" };

// //any 타입 (타입실드 해제 문법) -> 모든 자료형 허용해줘서 타입스크립트의 장점 사라짐
// let text: any = "123";

// //unknown 타입 -> any랑 비슷하지만 더 안전함
// let text2: unknown = 1;
// // text2 - 1; //타입이 정확하지 않아서 에러 발생

// //practice1
// let user: string = "kim";
// let age: number | undefined = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// //practice2
// let 학교: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];

// //함수 타입 지정
// // 변수만들고 타입 할당 안하면 any 타입 할당됨
// function func(x?: number): void {
//   // void return 하는 걸 막아줌, return이 불필요
// }

// func(2); // 쌩 js랑은 다르게 타입지정된 파라미터는 필수임
// //파라미터가 옵션일 경우에는 x?:number
// // x?:number은  x:number|undefined와 같다

// //practice
// function sayHi(x?: string) {
//   if (x) {
//     console.log("안녕하세요 " + x);
//   } else {
//     console.log("왜입력안함");
//   }
// }
// sayHi("홍길동 ");

// //practice
// function func2(x: string | number) {
//   console.log(String(x).length);
// }
// func2(123);

//practice

let total: number = 0;
function func3(income: number, home: boolean, score: string) {
  total = income + 10000;
  if (home) {
    total + 500;
  }
  if (score == "상") {
    total + 100;
  }
  if (total >= 600) {
    return "결혼가능";
  }
}
func3(40000, true, "상");
