import { Status } from "../types";
import calcCurrentLevel from "./calc-current-level";

test("calc integrity", () => {
    const MOCK_STATUS: Status = {
        vigor: 50,
        mind: 35,
        endurance: 10,
        strength: 16,
        dexterity: 12,
        intelligence: 70,
        faith: 7,
        arcana: 9,
    };
    const MOCK_LEVEL = 130;

    expect(calcCurrentLevel(MOCK_STATUS)).toBe(MOCK_LEVEL)
});