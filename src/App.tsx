import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function App () {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectedItem = (item: string) => {
    console.log({item});
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
  <>
    <nav>
      <Link to="/about" style={{ marginLeft: '10px' }}>About</Link>
    </nav>
    <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/>
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello World
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </div>
  </>
  )
}

export default App;