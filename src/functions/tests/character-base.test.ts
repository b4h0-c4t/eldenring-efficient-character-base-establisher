import characterBases from "./character-bases";

test("Status integrity", () => {
  characterBases.forEach(characterBase => {
    const statusTotal
      = characterBase.status.vigor
      + characterBase.status.mind
      + characterBase.status.endurance
      + characterBase.status.strength
      + characterBase.status.dexterity
      + characterBase.status.intelligence
      + characterBase.status.faith
      + characterBase.status.arcana
    expect(statusTotal - characterBase.status.level).toBe(79);
  });
})