import type { Status } from "../types";
import calcCurrentLevel from "./calc-current-level";
import characterBases from "./character-bases";

const establishEfficientCharacterBases = (status: Status): Array<{name: string; level: number}> => {
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

    const finalLevelFromCharacterBases: Array<{name: string, level: number}> = finalStatusFromCharacterBases.map((characterBase) => ({
        name: characterBase.name,
        level: calcCurrentLevel(characterBase.status),
    }));

    let establishEfficientCharacterBase: Array<{name: string, level: number}> = [{name: "none", level: Infinity}];
    
    finalLevelFromCharacterBases.forEach((characterBase) => {
        if(characterBase.level === establishEfficientCharacterBase[0].level) establishEfficientCharacterBase = [...establishEfficientCharacterBase, characterBase];
        if(characterBase.level < establishEfficientCharacterBase[0].level) establishEfficientCharacterBase = [characterBase];
    });

    return establishEfficientCharacterBase;
};

export default establishEfficientCharacterBases;