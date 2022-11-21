import Button from "./Button";
import { handleSubmit } from "./Button";
import "../Main/Main.css";
import "./Button.css";
import "./Form.css";

export default function Form() {
  return (
    <>
      <section className="heading">
        <h2>NEW ENTRY - TODAY, FEB 28, 2028</h2>
      </section>

      <form className="form">
        <label for="motto">Motto</label>
        <textarea id="motto" rows="1"></textarea>
        <label for="notes">Notes</label>
        <textarea id="notes" rows="5"></textarea>
        <Button type="submit" className="form__submit" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </>
  );
}
