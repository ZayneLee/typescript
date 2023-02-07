const enum EDirection {
  Up, // 위에서부터 0,1,2,3... 의 값을 가진다.
  Down, // Down = 'hello' 등의 문자열을 값으로 지정해줄 수도 있다.
  Left,
  Right,
}

const a = EDirection.Up; // a = 0
const b = EDirection.Left; // b = 2

// 위 enum 정의와 같은 표현
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const d = ODirection.Up; // d = 0

type Direction1 = keyof typeof ODirection; // {readonly Up:0. readonly Down:1, readonly Left:2, readonly Right:3}
type Direction2 = typeof ODirection[keyof typeof ODirection]; // 0 | 1 | 2 | 3

function walk(dir: EDirection) {}
function run(dir: Direction2) {}

walk(EDirection.Down);
run(ODirection.Up);

const obj = { a: "1", b: "2", c: "3" } as const;
type thisKey = keyof typeof obj; // "a" | "b" | "c"
type thisValue = typeof obj[keyof typeof obj]; // "1" | "2" | "3"
