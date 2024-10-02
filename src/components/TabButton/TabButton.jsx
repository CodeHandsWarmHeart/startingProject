export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("hello");
  }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
