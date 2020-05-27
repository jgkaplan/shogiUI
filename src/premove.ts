import * as util from './util'
import * as cg from './types'

type Mobility = (x1: number, y1: number, x2: number, y2: number) => boolean;

function diff(a: number, b: number): number {
  return Math.abs(a - b);
}

function pawn(color: cg.Color): Mobility {
  return (x1, y1, x2, y2) => {
      return color === 'white' ? (
          x1 === x2 && y2 == y1 + 1
      ) : (
          x1 === x2 && y2 == y1 - 1
      );
  }
}

function knight(color: cg.Color): Mobility {
    return (x1, y1, x2, y2) => {
        const xd = diff(x1, x2);
          return color === 'white' ? (
              xd === 1 && y2 == y1 + 2
          ) : (
              xd === 1 && y2 == y1 - 2
          );
      }
}

const bishop: Mobility = (x1, y1, x2, y2) => {
  return diff(x1, x2) === diff(y1, y2);
}

const rook: Mobility = (x1, y1, x2, y2) => {
  return x1 === x2 || y1 === y2;
}

function lance(color: cg.Color): Mobility {
    return (x1, y1, x2, y2) => {
      return x1 === x2 && (
          color === 'white' ? y2 > y1 : y1 > y2
      )
    }
}

function gold(color: cg.Color): Mobility {
    return (x1, y1, x2, y2) => {
        const xd = diff(x1, x2);
        return (color === 'white' ? (
            (xd < 2 && y2 === y1 + 1)
            || (x1 === x2 && y2 === y1 - 1)
            || (y1 === y2 && xd === 1)
        ) : (
            (xd) < 2 && y2 === y1 - 1)
            || (x1 === x2 && y2 === y1 + 1)
            || (y1 === y2 && xd === 1)
        );
    }
}

function silver(color: cg.Color): Mobility {
    return (x1, y1, x2, y2) => {
        const xd = diff(x1, x2);
        const yd = diff(y1, y2);
        return xd === 1 && yd == 1 || (color === 'white' ? (
            x1 === x2 && y2 == y1 + 1
        ) : (
            x1 === x2 && y2 == y1 - 1
        ))
    }
}

const king: Mobility = (x1, y1, x2, y2)  => (
    diff(x1, x2) < 2 && diff(y1, y2) < 2
    )

const allPos = util.allKeys.map(util.key2pos);

export default function premove(pieces: cg.Pieces, key: cg.Key): cg.Key[] {
  const piece = pieces[key]!,
    pos = util.key2pos(key),
    r = piece.role,
    mobility: Mobility = r === 'pawn' ? pawn(piece.color) : (
      r === 'knight' ? knight(piece.color) : (
        r === 'bishop' ? bishop : (
          r === 'rook' ? rook : (
              r === 'lance' ? lance(piece.color) : (
                  r === 'silver' ? silver(piece.color) : (
                    r === 'gold' ? gold(piece.color) : king))
          ))));
  return allPos.filter(pos2 =>
    (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1])
  ).map(util.pos2key);
};
