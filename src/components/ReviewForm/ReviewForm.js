import React from "react";
import LabelValuePair from "../commons/LabelValuePair";

const ReviewForm = ({ formState, onSubmit }) => {
  const {
    cardHolderName,
    cardHolderStreet,
    cardHolderZip,
    ccNumber,
    ccSecurity,
    ccExpiry,
    traferAccount,
    transferAmount,
  } = formState || {};
  const cardHolderLabel = "Name";
  const streetLabel = "Street Address";
  const zipLabel = "Zip Code";

  return (
    <section>
      <LabelValuePair label={cardHolderLabel} value={cardHolderName} />
      <LabelValuePair label={streetLabel} value={cardHolderStreet} />
      <LabelValuePair label={zipLabel} value={cardHolderName} />
      {/* <LabelValuePair label={cardHolderLabel} value={cardHolderName} />
      <LabelValuePair label={cardHolderLabel} value={cardHolderName} />
      <LabelValuePair label={cardHolderLabel} value={cardHolderName} />
      <LabelValuePair label={cardHolderLabel} value={cardHolderName} /> */}
    </section>
  );
};
export default ReviewForm;
