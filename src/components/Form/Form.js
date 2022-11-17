import Button from "./Button";

export default function Form() {
  return (
    <>
      <h2>NEW ENTRY - TODAY, FEB 28, 2028</h2>
      <form>
        <label for="motto">Motto</label>
        <textarea id="motto" rows="1"></textarea>
        <label for="notes">Motto</label>
        <textarea id="notes" rows="5"></textarea>
        <Button type="submit">Create</Button>
      </form>
    </>
  );
}
