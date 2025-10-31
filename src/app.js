import React, { useState } from 'react';

function App() {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingChange = (topping) => {
    setSelectedToppings(prev =>
      prev.includes(topping)
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };

  return (
    <div>
      <h1>Pizza Ordering App</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedToppings.includes('Pepperoni')}
            onChange={() => handleToppingChange('Pepperoni')}
          />
          Add pepperoni
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedToppings.includes('Mushrooms')}
            onChange={() => handleToppingChange('Mushrooms')}
          />
          Add mushrooms
        </label>
      </div>
      <ul>
        <li>Cheese</li>
        {selectedToppings.map(topping => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
