import { BaseStatus } from "../types";
import rateOfHP from "../definitions/rate-of-hp";
import rateOfFP from "../definitions/rate-of-fp";
import rateOfStamina from "../definitions/rate-of-stamina";
import rateOfAmount from "../definitions/rate-of-amount";
import rateOfLuck from "../definitions/rate-of-luck";

interface Props {
  characterBase: {name: string, status: BaseStatus};
}

const CharacterStatusView = ({ characterBase }: Props) => (
  <article style={{marginTop: "16px"}}>
    <h3 style={{margin: 0, marginTop: "8px"}}>{ characterBase.name }</h3>
    <section>
      <h4 style={{margin: 0}}>Advanced Status</h4>
      <div>HP: { rateOfHP[characterBase.status.vigor] }</div>
      <div>FP: { rateOfFP[characterBase.status.mind] }</div>
      <div>Stamina: { rateOfStamina[characterBase.status.endurance] }</div>
      <div>Amount: {rateOfAmount[characterBase.status.endurance]}</div>
      <div>Luck: { rateOfLuck[characterBase.status.arcane] }</div>
    </section>
    <section>
      <h4 style={{margin: 0, marginTop: "8px"}}>Base Status</h4>
      <div>Vigor: {characterBase.status.vigor}</div>
      <div>Mind: {characterBase.status.mind}</div>
      <div>Endurance: {characterBase.status.endurance}</div>
      <div>Strength: {characterBase.status.strength}</div>
      <div>Dexterity: {characterBase.status.dexterity}</div>
      <div>Intelligence: {characterBase.status.intelligence}</div>
      <div>Faith: {characterBase.status.faith}</div>
      <div>Arcane: {characterBase.status.arcane}</div>
    </section>
  </article>
);

export default CharacterStatusView;
