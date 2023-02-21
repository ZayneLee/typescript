// // // 속성이 적을수록 넓은 타입
// // type A = { name: string };
// // type B = { age: number };
// // type C = { name: string; age: number };

// // const c: C = { name: "lee", age: 25 };

// interface A {
//   a: string;
// }

// const obj: A = { a: "hello", b: "world" }; // 에러 발생
// // 개체 리터럴에는 잉여 속성 검사가 존재

// const obj1 = { a: "hello", b: "world" };
// const obj2: A = obj1; // 에러 검사 오류

// // 반환형이 void 이면 undefined return 가능
// function a(): void {
//   return "hello";
// }
// function b(): void {
//   return null;
// }
// function c(): void {
//   return undefined;
// }

// // 함수와 메소드의 void 가 다름
// function d(): void {}

// function e(callback: () => void): void {}

// interface Human {
//   talk: () => void;
// }

// // 매개변수와 메소드의 void 경우 리턴 값 존재 가능 => 리턴 값을 사용하지 않겠다는 의미

// e(() => {
//   return 1; // void 이지만 리턴 값 존재
// });

// const human: Human = {
//   talk() {
//     return "abc"; // void 이지만 리턴 값 존재
//   },
// };

// declare function forEach(
//   arr: number[],
//   callback: (el: number) => undefined
// ): void;
// // declare를 써서 타입만 만들어 줄 수 있음. js로 변환시 사라진다.

// let target: number[] = [];
// forEach([1, 2, 3], (el) => target.push(el)); // push의 리턴 값은 number 형식. number는 undefined에 할당할 수 없다.
// // declare function forEach(arr:number[], callback:(el:number)=> number):void; 로 수정 시 에러 사라짐.
// // declare function forEach(arr:number[], callback:(el:number)=> void):void; 콜백함수의 리턴 값을 void로 해도 에러가 사라진다.
// // 매개변수에서 쓰이는 void는 리턴 값이 무엇이든 올 수 있다.

// forEach([1, 2, 3], (el) => {
//   target.push(el);
// });
