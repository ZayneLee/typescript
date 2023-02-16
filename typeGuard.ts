// function numOrStr(a: number | string) {
//   //   a.toFixed(1); // string 형식에 toFixed 속성이 없음

//   // 타입 가드
//   if (typeof a === "number") {
//     a.toFixed(1);
//   } else {
//     a.charAt(3);
//   }
// }

// numOrStr("123");
// numOrStr(123);

// // 타입스크립트는 배열도 구분 가능

// function numOrNumArray(a: number | number[]) {
//   // 배열 확인 조건식
//   if (Array.isArray(a)) {
//     // number[]
//     a.concat(4);
//   } else {
//     // number
//     a.toFixed(3);
//   }
// }

// numOrNumArray(123);
// numOrNumArray([1, 2, 3]);

// // 클래스가 타입이 될 수도 있다.
// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// function aOrB(param: A | B) {
//   if (param instanceof A) {
//     param.aaa();
//   }
// }

// // 클래스가 타입일 때는 아래와 같이 인스턴스를 의미
// aOrB(new A());

// 객체의 값과 속성으로 타입 구분 가능

type B = { type: "b"; bbb: string };
type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: string };

function typeCheck(a: B | C | D) {
  // 값으로 구분
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }

  // 속성으로 구분
  if ("bbb" in a) {
    a.bbb;
  } else if ("ccc" in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}
