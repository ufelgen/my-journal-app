import Button from "../Form/Button";
import "./EntriesSection.css";

export default function TabBar() {
  return (
    <>
      <Button type="button" className="tabBar__button">
        <span>All Entries</span> <span>3</span>
      </Button>
      <Button type="button" className="tabBar__button">
        <span>Favourites</span> <span>1</span>
      </Button>
    </>
  );
}
