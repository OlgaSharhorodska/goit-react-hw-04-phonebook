export default function Filter({ onInputHandler }) {
  return (
    <div className="filter">
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        placeholder="Name Surname"
        onChange={evt => {
          onInputHandler(evt.target.value);
        }}
      />
    </div>
  );
}
