
interface Props {
  name: string;
  value: number;
  setValue: (n: number) => void;
}

const InputForm = (props: Props) => {
  const setRelativeValue = (e: React.MouseEvent, n: number) => {
    props.setValue(props.value + n);
    const inputElement = e.currentTarget.parentElement?.querySelector("input");
    if(inputElement instanceof HTMLInputElement) inputElement.value = `${props.value}`;
  }

  return (
    <div key={props.name}>
        <label htmlFor={props.name}>{props.name}</label>
        <input name={props.name} type="number" defaultValue={0} onChange={(e) => props.setValue(parseInt(e.target?.value))} />
        <button onClick={(e) => setRelativeValue(e, -10)}>-10</button>
        <button onClick={(e) => setRelativeValue(e, -1)}>-1</button>
        <button onClick={(e) => setRelativeValue(e, 1)}>+1</button>
        <button onClick={(e) => setRelativeValue(e, 10)}>+10</button>
    </div>
  );
};

export default InputForm;