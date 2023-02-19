const x: {} = "hello";
const y: Object = "hi"; // {}, Object 는 모든 타입(null과 undefined 제외)
const x1: object = "hi";
const x2: object = { hello: "world" };
const z: unknown = "h1"; // unknown 도 모든 타입 받을 수 있으나 사용시 타입 지정해주어야 함

// unknown = {} | null | undefined
if (z) {
  // 해당 조건문에서 null 과 undefined 가 제외
  z; // z : {} 로 모든 타입 가능
} else {
  z; // z : unknown
}
