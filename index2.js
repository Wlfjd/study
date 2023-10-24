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
//함수 타입 지정
// 변수만들고 타입 할당 안하면 any 타입 할당됨
function func(x) {
    // void return 하는 걸 막아줌, return이 불필요
}
func(2); // 쌩 js랑은 다르게 타입지정된 파라미터는 필수임
//파라미터가 옵션일 경우에는 x?:number
// x?:number은  x:number|undefined와 같다
//practice
function sayHi(x) {
    if (x) {
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("왜입력안함");
    }
}
sayHi("홍길동 ");
//practice
function func2(x) {
    console.log(String(x).length);
}
func2(123);
//practice;
var total = 0;
function func3(income, home, score) {
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
//narrowing
function myfunc(x) {
    if (typeof x === "string") {
        //type이 하나로 확정되지 않은 경우 type narrowing을 사용해야함
        return x + 1;
    }
    else {
        return x + 1;
    }
}
myfunc(123);
// assertion
function myfunc2(x) {
    var array = [];
    array[0] = x; //타입 덮어쓰기 => union 타입에서 타입 확정할 때 사용하기! 타입 변경은 안됨
}
myfunc2(123);
var animals = 123;
//const
var area = { region: "seoul" }; //타입스크립트에서는 오브젝트 안의 변수 수정 못하게 막는 것이 가능(js는 불가)
area.region = "busan";
var girl = { name: "amber" };
//literal type -> 들어올 수 있는 특정 문자를 타입처럼 지정
function gg(a) {
    return 1;
}
function rsp(x) {
    return ["rock"];
}
//as const 문법
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
var ABC = function (x, y) {
    return x + y;
};
//rest param  타입 지정
//rest 파라미터는 배열로 출력되어서 타입을 배열로 지정해줘 함
function func5() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a); //배열로 출력
}
func5(1, 2, 3, 4, 5, 6);
///...을 배열이나 객체 왼쪽에 쓰면 값을 꺼낸다는 의미로 rest 파라미터와는 다르다
// destructuring 타입 지정
var _a = ["안녕", 100], aa = _a[0], bb = _a[1];
console.log(aa, bb);
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age; // 키,밸류 같으면 하나로 작성 가능
var obj = { student: true, age: 20 }; // 키,밸류 같으면 하나로 작성 가능
function func6(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
func6(obj);
//narrowing - undefined, null
function func7(a) {
    if (a && typeof a === "string") {
        //a가 undefined 면 if 문 실행 안되고 a가 string 이면 실행됨
    }
}
function ani(animal) {
    if ("swim" in animal) {
        //Fish타입인지 아닌지 검사하는 네로잉 문법 (swim은 Fish 타입에만 존재하기 때문)
        animal.swim;
    }
}
function func8(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car 타입입니다");
    }
}
//never 타입 ( = 있을 수 없다는 뜻 ) - 리턴과 endpoint가 없어야 함
// void 타입으로 대체 가능
function func9() {
    throw new Error(); // 에러가 나면 전체 코드실행이 중단
}
function func10() {
    while (true) {
        // 조건식이 true일 경우 계속 내부 코드를 실행
        console.log(1);
    }
}
//
console.log("test");
console.log("test2");
// class Users {
//   public name: string;
//   constructor() {
//     this.name = "kim";
//   }
// }
// let 유저1 = new Users();
// 유저1.name = "park"; //가능
// class User {
//   public name: string;
//   private familyName: string;
//   constructor() {
//     this.name = "kim";
//     let hello = this.familyName + "안뇽"; //가능
//   }
// }
// // let 유저1 = new User();
// // 유저1.name = 'park';  //가능
// // 유저1.familyName = 456; //에러남
// class Persons {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let 사람2 = new Persons("john");
// class Person {
//   constructor(public name: string) {}
// }
// let 사람3 = new Person("john");
