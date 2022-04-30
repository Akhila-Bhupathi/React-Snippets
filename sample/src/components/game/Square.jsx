export default function Square({ id, value, onClick }) {
  return (
    <button
      style={{ height: "100px", width: "100px" }}
      onClick={() => onClick(id)}
    >
      {value}
    </button>
  );
}
