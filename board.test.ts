import { generateBoard } from "./nQueen"; 

function printBoard(board: string[][]) {
    return board.map(row => row.join(" ")).join("\n");
}

describe("generateBoard", () => {
    it("doit générer un tableau n x n rempli de '0'", () => {
        const n = 4;
        const expectedBoard = [
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0']
        ];

        const result = generateBoard(n);

        console.log("\n Plateau attendu :\n" + printBoard(expectedBoard));
        console.log("\n Plateau obtenu :\n" + printBoard(result));

        expect(result).toEqual(expectedBoard);
    });

    it("doit générer un tableau vide pour n = 0", () => {
        const expectedBoard: string[][] = [];
        const result = generateBoard(0);

        console.log("\n Plateau attendu :\n", expectedBoard);
        console.log("\n Plateau obtenu :\n", result);

        expect(result).toEqual(expectedBoard);
    });

    it("doit générer un tableau 1x1 avec une seule case", () => {
        const expectedBoard = [['0']];
        const result = generateBoard(1);

        console.log("\n Plateau attendu :\n" + printBoard(expectedBoard));
        console.log("\n Plateau obtenu :\n" + printBoard(result));

        expect(result).toEqual(expectedBoard);
    });
});