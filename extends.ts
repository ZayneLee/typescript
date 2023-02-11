type Animal = { breath: true };
type Cat = Animal & { breed: true };
type Human = Cat & { think: true };
// type 에서 상속의 개념으로 사용

const lee: Human = { breath: true, breed: true, think: true };

interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}
// interface 에서는 extends 키워드를 사용하여 상속
const b: B = { breath: true, breed: true };

// type Human 을 extends 키워드를 이용하여 상속 가능
interface C extends Human {}

const c: C = { breath: true, breed: true, think: true };

// interface 특징 중 하나는 다음과 같이 더해갈 수 있음
interface D {
  talk: () => void;
}
interface D {
  eat: () => void;
}
interface D {
  sit: () => void;
}

const d: D = { talk() {}, eat() {}, sit() {} };
