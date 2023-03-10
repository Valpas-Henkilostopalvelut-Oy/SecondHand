import React, { useEffect, useState } from "react";
import SignupForm from "./services/signup";
import ConfirmForm from "./services/confirm";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);

  return !confirm ? (
    <SignupForm setEmail={setEmail} setConfirm={setConfirm} />
  ) : (
    <ConfirmForm email={email} />
  );
};

export default Signup;
