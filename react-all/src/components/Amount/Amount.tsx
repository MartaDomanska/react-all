interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Amount = (props: Props) => {
  return (
    <div>
      <label>
        KWOTA:
        <input value={props.value} onChange={props.onChange}/>
      </label>
    </div>
  );
};
