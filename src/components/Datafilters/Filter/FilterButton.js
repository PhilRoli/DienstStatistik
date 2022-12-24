import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterButton({ text, hideMobile }) {
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'}`}>
            <button>{text}</button>
        </div>
        // <>
        //     <DropdownButton id={`dropdown-item-button ${hideMobile && 'hideMobile'}`} title={text}>
        //         <Dropdown.Item as="button">Action</Dropdown.Item>
        //         <Dropdown.Item as="button">Another action</Dropdown.Item>
        //         <Dropdown.Item as="button">Something else</Dropdown.Item>
        //     </DropdownButton>
        // </>
    );
}

export default FilterButton;
