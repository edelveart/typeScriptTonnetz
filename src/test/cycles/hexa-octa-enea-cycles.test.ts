import { describe, expect, it } from "vitest";

import { hexaCycles } from "../../cycles/hexa-cycles";
import { octaCycles } from "../../cycles/octa-cycles";
import { enneaCycles } from "../../cycles/ennea-cycles";

describe("tonnetz-tests", () => {
  it("HexaCycles", () => {
    expect(hexaCycles(0, [3, 4, 5])).toEqual([
      [0, 4, 7],
      [0, 3, 7],
      [8, 0, 3],
      [8, 11, 3],
      [4, 8, 11],
      [4, 7, 11],
      [3, 7, 10],
      [3, 6, 10],
      [11, 3, 6],
      [11, 2, 6],
      [7, 11, 2],
      [7, 10, 2],
      [6, 10, 1],
      [6, 9, 1],
      [2, 6, 9],
      [2, 5, 9],
      [10, 2, 5],
      [10, 1, 5],
      [9, 1, 4],
      [9, 0, 4],
      [5, 9, 0],
      [5, 8, 0],
      [1, 5, 8],
      [1, 4, 8],
    ]);
    expect(hexaCycles(9, [3, 4, 5])).toEqual([
      [9, 1, 4],
      [9, 0, 4],
      [5, 9, 0],
      [5, 8, 0],
      [1, 5, 8],
      [1, 4, 8],
      [0, 4, 7],
      [0, 3, 7],
      [8, 0, 3],
      [8, 11, 3],
      [4, 8, 11],
      [4, 7, 11],
      [3, 7, 10],
      [3, 6, 10],
      [11, 3, 6],
      [11, 2, 6],
      [7, 11, 2],
      [7, 10, 2],
      [6, 10, 1],
      [6, 9, 1],
      [2, 6, 9],
      [2, 5, 9],
      [10, 2, 5],
      [10, 1, 5],
    ]);
  });

  it("OctaCycles", () => {
    expect(octaCycles(2, [3, 4, 5])).toEqual([
      [2, 6, 9],
      [2, 5, 9],
      [5, 9, 0],
      [5, 8, 0],
      [8, 0, 3],
      [8, 11, 3],
      [11, 3, 6],
      [11, 2, 6],
      [10, 2, 5],
      [10, 1, 5],
      [1, 5, 8],
      [1, 4, 8],
      [4, 8, 11],
      [4, 7, 11],
      [7, 11, 2],
      [7, 10, 2],
      [6, 10, 1],
      [6, 9, 1],
      [9, 1, 4],
      [9, 0, 4],
      [0, 4, 7],
      [0, 3, 7],
      [3, 7, 10],
      [3, 6, 10],
    ]);
    expect(octaCycles(0, [3, 4, 5])).toEqual([
      [0, 4, 7],
      [0, 3, 7],
      [3, 7, 10],
      [3, 6, 10],
      [6, 10, 1],
      [6, 9, 1],
      [9, 1, 4],
      [9, 0, 4],
      [8, 0, 3],
      [8, 11, 3],
      [11, 3, 6],
      [11, 2, 6],
      [2, 6, 9],
      [2, 5, 9],
      [5, 9, 0],
      [5, 8, 0],
      [4, 8, 11],
      [4, 7, 11],
      [7, 11, 2],
      [7, 10, 2],
      [10, 2, 5],
      [10, 1, 5],
      [1, 5, 8],
      [1, 4, 8],
    ]);
  });

  it("EnneaCycles", () => {
    expect(enneaCycles(0, [3, 4, 5])).toEqual([
      [0, 4, 7, 10],
      [0, 3, 7, 10],
      [0, 3, 6, 10],
      [8, 0, 3, 6],
      [8, 11, 3, 6],
      [8, 11, 2, 6],
      [4, 8, 11, 2],
      [4, 7, 11, 2],
      [4, 7, 10, 2],
      [3, 7, 10, 1],
      [3, 6, 10, 1],
      [3, 6, 9, 1],
      [11, 3, 6, 9],
      [11, 2, 6, 9],
      [11, 2, 5, 9],
      [7, 11, 2, 5],
      [7, 10, 2, 5],
      [7, 10, 1, 5],
      [6, 10, 1, 4],
      [6, 9, 1, 4],
      [6, 9, 0, 4],
      [2, 6, 9, 0],
      [2, 5, 9, 0],
      [2, 5, 8, 0],
      [10, 2, 5, 8],
      [10, 1, 5, 8],
      [10, 1, 4, 8],
      [9, 1, 4, 7],
      [9, 0, 4, 7],
      [9, 0, 3, 7],
      [5, 9, 0, 3],
      [5, 8, 0, 3],
      [5, 8, 11, 3],
      [1, 5, 8, 11],
      [1, 4, 8, 11],
      [1, 4, 7, 11],
    ]);
    expect(enneaCycles(9, [3, 4, 5])).toEqual([
      [9, 1, 4, 7],
      [9, 0, 4, 7],
      [9, 0, 3, 7],
      [5, 9, 0, 3],
      [5, 8, 0, 3],
      [5, 8, 11, 3],
      [1, 5, 8, 11],
      [1, 4, 8, 11],
      [1, 4, 7, 11],
      [0, 4, 7, 10],
      [0, 3, 7, 10],
      [0, 3, 6, 10],
      [8, 0, 3, 6],
      [8, 11, 3, 6],
      [8, 11, 2, 6],
      [4, 8, 11, 2],
      [4, 7, 11, 2],
      [4, 7, 10, 2],
      [3, 7, 10, 1],
      [3, 6, 10, 1],
      [3, 6, 9, 1],
      [11, 3, 6, 9],
      [11, 2, 6, 9],
      [11, 2, 5, 9],
      [7, 11, 2, 5],
      [7, 10, 2, 5],
      [7, 10, 1, 5],
      [6, 10, 1, 4],
      [6, 9, 1, 4],
      [6, 9, 0, 4],
      [2, 6, 9, 0],
      [2, 5, 9, 0],
      [2, 5, 8, 0],
      [10, 2, 5, 8],
      [10, 1, 5, 8],
      [10, 1, 4, 8],
    ]);
  });
});
