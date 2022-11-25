import Button from "./Button";
import "../Main/Main.css";
import "./Button.css";
import "./Form.css";

export default function Form({ onAddEntries, entry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newEntry = {
      motto: event.target.elements.motto.value,
      notes: event.target.elements.notes.value,
      date: "today",
    };

    onAddEntries(newEntry);

    event.target.reset();
    event.target.elements.motto.focus();
  }

  return (
    <>
      <section className="heading">
        <h2>NEW ENTRY - TODAY, FEB 28, 2028</h2>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="motto">Motto</label>
        <input id="motto" name="motto"></input>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows="5"></textarea>

        <Button type="submit" className="form__submit">
          Create
        </Button>
      </form>
    </>
  );
}
