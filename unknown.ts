// interface A {
//   talk: () => void;
// }

// const a: A = {
//   talk() {
//     return 3;
//   },
// };

// // any의 문제점 : 타입 검사를 포기, 존재하지 않는 메소드의 호출이 가능해짐
// const b: any = a.talk();
// b.method();

// // unknown 사용시에는 타입을 사용자가 지정. 현재 타입을 모를 때 사용
// const c: unknown = a.talk();
// (c as A).talk();

// // unknown 대표 예시
// try {
// } catch (error) {
//   // error 의 타입 : unknown
//   (error as Error).message;
// }
