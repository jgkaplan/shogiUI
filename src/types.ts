export type Color = 'white' | 'black';
export type Role = 'king' | 'gold' | 'rook' | 'bishop' | 'knight' | 'pawn' | 'silver' | 'lance';
export type Key = '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99';
export type File = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type FEN = string;
export type Pos = [number, number];
export interface Piece {
  role: Role;
  color: Color;
  promoted?: boolean;
}
export interface Drop {
  role: Role;
  key: Key;
}
export interface Pieces {
  [key: string]: Piece | undefined;
}
export interface PiecesDiff {
  [key: string]: Piece | undefined;
}

export type KeyPair = [Key, Key];

export type NumberPair = [number, number];

export type NumberQuad = [number, number, number, number];

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface Dests {
  [key: string]: Key[] | undefined;
}

export interface Elements {
  board: HTMLElement;
  container: HTMLElement;
  ghost?: HTMLElement;
  svg?: SVGElement;
}
export interface Dom {
  elements: Elements;
  bounds: Memo<ClientRect>;
  redraw: () => void;
  redrawNow: (skipSvg?: boolean) => void;
  unbind?: Unbind;
  destroyed?: boolean;
  relative?: boolean; // don't compute bounds, use relative % to place pieces
}
export interface Exploding {
  stage: number;
  keys: Key[];
}

export interface MoveMetadata {
  premove: boolean;
  ctrlKey?: boolean;
  holdTime?: number;
  captured?: Piece;
  predrop?: boolean;
}
export interface SetPremoveMetadata {
  ctrlKey?: boolean;
}

export type WindowEvent = 'onscroll' | 'onresize';

export type MouchEvent = MouseEvent & TouchEvent;

export interface KeyedNode extends HTMLElement {
  cgKey: Key;
}
export interface PieceNode extends KeyedNode {
  cgPiece: string;
  cgAnimating?: boolean;
  cgFading?: boolean;
  cgDragging?: boolean;
}
export interface SquareNode extends KeyedNode { }

export interface Memo<A> {
  (): A;
  clear: () => void;
}

export interface Timer {
  start: () => void;
  cancel: () => void;
  stop: () => number;
}

export type Redraw = () => void;
export type Unbind = () => void;
export type Milliseconds = number;
export type KHz = number;

export const files: File[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
