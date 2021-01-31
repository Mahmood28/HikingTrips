import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const DropDown = () => {
 
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Difficulty"
    >
       <Dropdown.Item  href="/trips">
        None
      </Dropdown.Item>
      <Dropdown.Item  href="/trips/easy">
        Easy
      </Dropdown.Item>
      <Dropdown.Item  href="/trips/medium">
        Medium
      </Dropdown.Item>
      <Dropdown.Item href="/trips/hard">
        Hard
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
