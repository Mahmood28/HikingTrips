import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const DropDown = (props) => {
  const handleSelect = (e) => {
    console.log(e);
    props.setDifficulty(e);
  };
  return (
    <DropdownButton
      onSelect={handleSelect}
      id="dropdown-basic-button"
      title="Difficulty"
    >
      <Dropdown.Item eventKey="easy" href="#/easy">
        Easy
      </Dropdown.Item>
      <Dropdown.Item eventKey="medium" href="#/medium">
        Medium
      </Dropdown.Item>
      <Dropdown.Item eventKey="hard" href="#/hard">
        Hard
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
