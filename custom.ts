interface Cat {
  meow: number;
}
interface Dog {
  bark: number;
}

// 타입을 구분해주는 커스텀 함수를 만들 수 있음.
// 리턴 값에 is 키워드가 들어가 있으면 커스텀 타입 가드 함수
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별은 직접 코딩
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

const cat: Cat | Dog = { meow: 3 };
if (catOrDog(cat)) {
  console.log(cat.meow);
}

if ("meow" in cat) {
  console.log(cat.meow);
}

// 커스텀 타입 가드 함수는 if 문 안에서 사용
function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    console.log(a.bark);
  }
  if ("meow" in a) {
    console.log(a.meow);
  }
}
