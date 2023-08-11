import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App: React.FC = () => {
  const [shoeColor, setShoeColor] = React.useState<string>("Green");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShoeColor(event.target.value);
  };

  return (
    <div className="container max-w-2xl mx-auto flex flex-col items-center justify-center">
      <Form onSelectChange={handleSelectChange} />
      <Card shoeColor={shoeColor} />
    </div>
  );
};

export default App;
