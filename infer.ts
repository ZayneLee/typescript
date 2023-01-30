function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Params = Parameters<typeof zip>;
type First = Params[0];
