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
  // useApiReduce(somePromise) => [state, dispatchAction]
  const [showReview, setShowReview] = useState(false);
  const [formState, setFormState] = useState(null);

  const onContinueParent = (state) => {
    setFormState(state);
    setShowReview(true);
  };

  useEffect(() => {
    dispatchGetCardholderInfo();
  }, []);

  // const isFundCheckApproved = successData?.[0]?.login.length > 5
  const showError = isError;

  return showError ? (
    <>
      <main>
        {!showReview && (
          <>
            <Title content={isPending ? "Pending" : "Hi! there"} />
            <HelperText
              content={isPending ? "Pending" : "Helper Text goes here"}
            />
            <Form
              cardHolderName={successData?.[0]?.login}
              onSubmit={onContinueParent}
            />
          </>
        )}
        {showReview && <ReviewForm formState={formState} />}
      </main>
    </>
  ) : (
    "SHOW ERROR"
  );
};

export default App;
