import type { Status } from "../types";

const calcCurrentLevel = (status: Status): number => {
    const statusTotal
        = status.vigor
        + status.mind
        + status.endurance
        + status.strength
        + status.dexterity
        + status.intelligence
        + status.faith
        + status.arcane
    return statusTotal - 79;
};

export default calcCurrentLevel;