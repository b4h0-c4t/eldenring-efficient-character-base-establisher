import type { BaseStatus, Status } from "../types";
import calcCurrentLevel from "./calc-current-level";
import characterBases from "../definitions/character-bases";

const establishEfficientCharacterBases = (status: Status): Array<{name: string; status: BaseStatus}> => {
    const finalStatusFromCharacterBases: Array<{name: string; status:Status;}> = characterBases.map((characterBase) => ({
        name: characterBase.name,
        status: {
            vigor: Math.max(characterBase.status.vigor, status.vigor),
            mind: Math.max(characterBase.status.mind, status.mind),
            endurance: Math.max(characterBase.status.endurance, status.endurance),
            strength: Math.max(characterBase.status.strength, status.strength),
            dexterity: Math.max(characterBase.status.dexterity, status.dexterity),
            intelligence: Math.max(characterBase.status.intelligence, status.intelligence),
            faith: Math.max(characterBase.status.faith, status.faith),
            arcane: Math.max(characterBase.status.arcane, status.arcane),
        }
    }));

    const finalLevelFromCharacterBases: Array<{name: string, status: BaseStatus}> = finalStatusFromCharacterBases.map((characterBase) => ({
        name: characterBase.name,
        status: {
            level: calcCurrentLevel(characterBase.status),
            ...characterBase.status,
        },
    }));

    let establishEfficientCharacterBase: Array<{name: string, status: BaseStatus}> = [{name: "none", status: {
        level: Infinity,
        vigor: 0,
        mind: 0,
        endurance: 0,
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        faith: 0,
        arcane: 0,
    }}];
    
    finalLevelFromCharacterBases.forEach((characterBase) => {
        if(characterBase.status.level === establishEfficientCharacterBase[0].status.level) establishEfficientCharacterBase = [...establishEfficientCharacterBase, characterBase];
        if(characterBase.status.level < establishEfficientCharacterBase[0].status.level) establishEfficientCharacterBase = [characterBase];
    });

    return establishEfficientCharacterBase;
};

export default establishEfficientCharacterBases;