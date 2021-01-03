import React from "react";
import useSimpleInput from "../../customHooks/useSimpleInput";
import CardHolderInfoBlock from "../CardHolderInfoBlock";

const Form = ({ onSubmit, onCancel, cardHolderName }) => {
  const {
    bind: cardHolderBnd_street,
    value: cardHolderStreet,
  } = useSimpleInput();
  const { bind: cardHolderBnd_zip, value: cardHolderZip } = useSimpleInput();
  const { bind: ccBnd_Number, value: ccNumber } = useSimpleInput();
  const { bind: ccBnd_Expiry, value: ccExpiry } = useSimpleInput();
  const { bind: ccBnd_Security, value: ccSecurity } = useSimpleInput();
  const { bind: transferAmountBnd, value: transferAmount } = useSimpleInput();
  const { bind: transferAccountBnd, value: traferAccount } = useSimpleInput();
  // const [value, setValue] = useState("");
  // const propObj = { value, onChange: (e) => setValue(e.target.value) };

  const onContinue = () =>
    onSubmit({
      cardHolderName,
      cardHolderStreet,
      cardHolderZip,
      ccNumber,
      ccSecurity,
      ccExpiry,
      traferAccount,
      transferAmount,
    });

  return (
    <section>
      <CardHolderInfoBlock
        streetBnd={cardHolderBnd_street}
        zipBnd={cardHolderBnd_zip}
        serial='1'
        title='Cardholder Information'
        cardHolderName={cardHolderName}
      />
      {/* <input {...propObj} /> */}
      <button onClick={onContinue}>Continue</button>
    </section>
  );
};
export default Form;
