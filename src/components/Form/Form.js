import Button from "./Button";
import "./Button.css";
import styled from "styled-components";

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
      <StyledHeading>
        <h2>NEW ENTRY - TODAY, FEB 28, 2028</h2>
      </StyledHeading>

      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="motto">Motto</label>
        <input id="motto" name="motto"></input>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows="5"></textarea>

        <Button type="submit" className="form__submit">
          Create
        </Button>
      </StyledForm>
    </>
  );
}

const StyledHeading = styled.section`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  /* figma above, mine below */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-size: 0.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
