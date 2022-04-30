import { useContext } from "react";
import { Context } from "./Context";

export default function C2() {
  const value = useContext(Context);
  return (
    <>
      <h6>{value}</h6>
    </>
  );
}
