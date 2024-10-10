interface Props {
  showTaxNumber: boolean;
  onShowTaxNumber: (show: boolean) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaxNumber = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="invoice"
          checked={props.showTaxNumber}
          onChange={(e) => props.onShowTaxNumber(e.target.checked)}
        />
        <span> czy faktura?</span>
      </label>
      {props.showTaxNumber && (
        <label>
          NIP:
          <input
            name="taxnumber"
            value={props.value}
            onChange={props.onChange}
          />
        </label>
      )}
    </div>
  );
};
