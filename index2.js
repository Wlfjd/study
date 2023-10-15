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
var names = "kim";
var ages = 50;
var marrige = true;
//union 타입
var members = [1, "2", 3];
var member2 = { a: "123" };
//any 타입 (타입실드 해제 문법) -> 모든 자료형 허용해줘서 타입스크립트의 장점 사라짐
var text = "123";
//unknown 타입 -> any랑 비슷하지만 더 안전함
var text2 = 1;
// text2 - 1; //타입이 정확하지 않아서 에러 발생
//practice1
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//practice2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
