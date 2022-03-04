
interface Props {
  name: string;
  value: number;
  setValue: (n: number) => void;
}

const InputForm = (props: Props) => {
  const setRelativeValue = (e: React.MouseEvent, n: number) => {
    let currentValue: number;
    if(props.value + n < 0) currentValue = 0;
    else if(props.value + n > 99) currentValue = 99;
    else currentValue = props.value + n;

    const inputElement = e.currentTarget.parentElement?.querySelector("input");
    if(inputElement instanceof HTMLInputElement) inputElement.value = `${currentValue}`;
    props.setValue(props.value + n);
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