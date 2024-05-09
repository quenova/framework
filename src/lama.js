import React from 'react';

// Komponen Button dengan prop "color"
const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
}

// Komponen utama App
const App = () => {
  return (
    <div>
      {/* Menggunakan komponen Button dengan props */}
      <Button text="Click me" color="blue" />
      <Button text="Press me" color="green" />
    </div>
  );
}

export default App;
