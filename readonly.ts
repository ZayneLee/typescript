// readonly
interface A {
  readonly a: string;
  b: string;
}

const a: A = { a: "hello", b: "world" };
a.a = "123"; // readonly 읽기전용 속성으로 할당 불가

// 인덱스트 시그니처
type B = {
  [key: string]: string;
};

const b: B = { a: "1", b: "2" };

// 맵드 타입스
type C = "Human" | "Animal" | "Plant"; // 파이프(|) 쓸 때는 type으로. interface 는 and 와 or 이 안됨.
type D = { [key in C]: number };

const c: D = { Human: 1, Animal: 2, Plant: 3 };
