import { Context } from "./Context";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";

export default function Layout() {
  return (
    <>
      <Context.Provider value="light">
        <h1>Context</h1>
        <C1 />
        <C2 />
        <C3 />
      </Context.Provider>
    </>
  );
}
