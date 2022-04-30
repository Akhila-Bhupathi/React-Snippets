import HOC from "./HOC";

const C1x = () => {
  return (
    <div>
      <h5>I am C1 component</h5>
    </div>
  );
};

const C1 = HOC(C1x);

export default C1;
