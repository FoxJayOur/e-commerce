import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void
}

function ListGroup ( {items, heading, onSelectedItem} : ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;
    }


    return (
    <Fragment>
        <h1>{heading}</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map((item, index) => 
                <li 
                    key={item} 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => {
                        setSelectedIndex(index)
                        onSelectedItem(item)
                    }}
                >
                    {item}
                </li>
            )}
        </ul>
    </Fragment>
    )
}

export default ListGroup;