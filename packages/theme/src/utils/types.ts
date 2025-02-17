type Range<
  S extends number,
  E extends number,
  Arr extends unknown[] = [],
  Acc extends number = never,
> = Arr['length'] extends E
  ? Acc | S | E
  : Range<S, E, [...Arr, 1], Arr[S] extends undefined ? Acc : Acc | Arr['length']>

type WithString = string & {}

export type { Range, WithString }
