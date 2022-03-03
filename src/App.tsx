import { useEffect, useState } from 'react'
import { Status } from './types';
import establishEfficientCharacterBases from './functions/establish-efficient-character-bases';
import characterBases from './functions/character-bases';

function App() {
  const [vigor, setVigor] = useState(0);
  const [mind, setMind] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [faith, setFaith] = useState(0);
  const [arcane, setArcana] = useState(0);
  const [effieientCharacterBases, setEffieientCharacterBases] = useState([{name: "", level: Infinity}]);

  useEffect(() => {
    const currentStatus: Status = {
      vigor,
      mind,
      endurance,
      strength,
      dexterity,
      intelligence,
      faith,
      arcane,
    };
    
    setEffieientCharacterBases(establishEfficientCharacterBases(currentStatus));
  });

  return (
    <>
      <header>
        <h1>EldenRing Efficient Character Base Establisher</h1>
      </header>
      <main>
        <div>
          <label htmlFor="vigor">Vigor</label>
          <input name="vigor" type="number" defaultValue={0} onChange={(e) => setVigor(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="mind">Mind</label>
          <input name="mind" type="number" defaultValue={0} onChange={(e) => setMind(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="endurance">Endurance</label>
          <input name="endurance" type="number" defaultValue={0} onChange={(e) => setEndurance(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="strength">Strength</label>
          <input name="strength" type="number" defaultValue={0} onChange={(e) => setStrength(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="dexterity">Dexterity</label>
          <input name="dexterity" type="number" defaultValue={0} onChange={(e) => setDexterity(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="intelligence">Intelligence</label>
          <input name="intelligence" type="number" defaultValue={0} onChange={(e) => setIntelligence(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="faith">Faith</label>
          <input name="faith" type="number" defaultValue={0} onChange={(e) => setFaith(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="arcana">Arcana</label>
          <input name="arcana" type="number" defaultValue={0} onChange={(e) => setArcana(parseInt(e.target.value))} />
        </div>
        <div>Best Efficient Character Base is : { effieientCharacterBases.map((characterBase, i) => (<span>{i > 0 ? ", " : ""}{ characterBase.name }</span>)) }</div>
        <div>Target Level : { effieientCharacterBases[0].level }</div>
      </main>
    </>
  );
}

export default App;
