import Input from "../commons/Input/Input";
import LabelValuePair from "../commons/LabelValuePair";

const CardHolderInfoBlock = ({
  zipBnd,
  streetBnd,
  cardHolderName,
  title,
  serial,
}) => (
  <section>
    <h4>{`${serial}. ${title}`}</h4>
    <LabelValuePair label='Cardholder Name' value={cardHolderName} />
    <Input label='Street Address' {...streetBnd} />
    <Input label='Zip Code' {...zipBnd} />
  </section>
);
export default CardHolderInfoBlock;
