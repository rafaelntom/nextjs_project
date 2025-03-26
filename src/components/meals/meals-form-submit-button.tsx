"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const MealsSubmitFormButton = () => {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Submiting..." : "Share Meal"}</button>;
};

export default MealsSubmitFormButton;
