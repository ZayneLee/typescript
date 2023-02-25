// 타입스크립트 기본값

// 타입 자리 옆으로 기본값을 넣을 수 있다
const a = (b: number = 1, c: number = 2) => {
  return b;
};

// 기본값이 있으면 optional 이 붙어서 값이 없어도 됨
a(2); // 여기서 a의 타입은 a: (b?: number, c?: number) => number

// 객체 기본값
const d = (e: { hello: string } = { hello: "world" }) => {
  return e;
};

// 제네릭 기본값
const add = <T = unknown>(x: T, y: T) => ({ x, y });
