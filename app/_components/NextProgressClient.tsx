"use client";
import NextNProgress from "nextjs-progressbar";

const NextProgressClient = () => {
  return (
    <NextNProgress
      color="#F05423"
      options={{ showSpinner: false }}
      height={5}
    />
  );
};

export default NextProgressClient; 