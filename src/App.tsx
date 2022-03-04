import React, { useEffect, useState } from 'react'
import type { BaseStatus, Status } from './types';
import establishEfficientCharacterBases from './functions/establish-efficient-character-bases';
import InputForm from './components/InputForm';
import rateOfHP from './definitions/rate-of-hp';
import rateOfFP from './definitions/rate-of-fp';
import rateOfStamina from './definitions/rate-of-stamina';
import rateOfAmount from './definitions/rate-of-amount';
import CharacterStatusView from './components/CharacterStatusView';

function App() {
  const [vigor, setVigor] = useState(0);
  const [mind, setMind] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [faith, setFaith] = useState(0);
  const [arcane, setArcane] = useState(0);
  const [effieientCharacterBases, setEffieientCharacterBases] = useState([{name: "", status: {
    level: Infinity,
    vigor,
    mind,
    endurance,
    strength,
    dexterity,
    intelligence,
    faith,
    arcane,
  }}]);

  const setValueWithGuard = (setValue: (n: number) => void): (n: number) => void =>
    (n: number) => {
      if(n < 0) setValue(0);
      else if(n > 99) setValue(99);
      else setValue(n);
    };

  useEffect(() => {
    const currentStatus: Status = ({
      vigor,
      mind,
      endurance,
      strength,
      dexterity,
      intelligence,
      faith,
      arcane,
    });
    
    setEffieientCharacterBases(establishEfficientCharacterBases(currentStatus));
  }, [vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane]);

  return (
    <>
      <header>
        <h1>EldenRing Efficient Character Base Establisher</h1>
      </header>
      <main>
        <InputForm name="Vigor" value={vigor} setValue={setValueWithGuard(setVigor)} ></InputForm>
        <InputForm name="Mind" value={mind} setValue={setValueWithGuard(setMind)} ></InputForm>
        <InputForm name="endurance" value={endurance} setValue={setValueWithGuard(setEndurance)} ></InputForm>
        <InputForm name="strength" value={strength} setValue={setValueWithGuard(setStrength)} ></InputForm>
        <InputForm name="dexterity" value={dexterity} setValue={setValueWithGuard(setDexterity)} ></InputForm>
        <InputForm name="Intelligence" value={intelligence} setValue={setValueWithGuard(setIntelligence)} ></InputForm>
        <InputForm name="Faith" value={faith} setValue={setValueWithGuard(setFaith)} ></InputForm>
        <InputForm name="Arcane" value={arcane} setValue={setValueWithGuard(setArcane)} ></InputForm>
        <div>Best Efficient Character Base is : { effieientCharacterBases.map((characterBase, i) => (<span key={characterBase.name}>{i > 0 ? ", " : ""}{ characterBase.name }</span>)) }</div>
        <div>Target Level : { effieientCharacterBases[0].status.level }</div>
        {
          effieientCharacterBases.map((effieientCharacterBase) => (
            <CharacterStatusView key={effieientCharacterBase.name} characterBase={effieientCharacterBase} />
          ))
        }
      </main>
    </>
  );
}

export default App;
