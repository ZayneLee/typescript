// function zip(
//   x: number,
//   y: string,
//   z: boolean
// ): { x: number; y: string; z: boolean } {
//   return { x, y, z };
// }

// type P<T extends (...arg: any) => any> = T extends (...agrs: infer A) => any
//   ? A
//   : never;
// type Params = Parameters<typeof zip>;
// type Ret = ReturnType<typeof zip>;
// type First = Params[0];
