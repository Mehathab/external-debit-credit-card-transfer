import React, { useEffect, useState } from "react";
import useApiReducer from "../../customHooks/useApiReducer";
import { getCardholderInfo } from "../../api/memberApi";
import Title from "../commons/Title";
import HelperText from "../commons/HelperText";
import Form from "../Form";
import ReviewForm from "../ReviewForm";

const App = () => {
  const [
    { isPending, isSuccess, isError, successData, errorData },
    dispatchGetCardholderInfo,
  ] = useApiReducer(getCardholderInfo);
  const [showReview, setShowReview] = useState(false);
  const [formState, setFormState] = useState(null);

  const onContinue = (state) => {
    setFormState(state);
    setShowReview(true);
  };

  useEffect(() => {
    dispatchGetCardholderInfo();
  }, []);
  return (
    <main>
      <Title content={isPending ? "Pending" : "Hi! there"} />
      <HelperText content={isPending ? "Pending" : "Helper Text goes here"} />
      <Form cardHolderName={successData?.[0]?.login} onSubmit={onContinue} />
      {showReview && <ReviewForm formState={formState} />}
    </main>
  );
};

export default App;
