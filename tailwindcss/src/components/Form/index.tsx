import React from "react";
import Button from "../Button";

type FormProps = {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Form: React.FC<FormProps> = (props) => {
  return (
    <form className="my-4 w-96 flex flex-col">
      <label
        htmlFor="colors"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select the shoe color
      </label>
      <select
        id="colors"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        onChange={props.onSelectChange}
      >
        <option>Green</option>
        <option>Yellow</option>
        <option>Red</option>
        <option>White</option>
      </select>
      <Button
        text={"Check Availability"}
        onClick={(e) => {
          e.preventDefault();
          alert("The shoe is available in the stock!");
        }}
      />
    </form>
  );
};

export default Form;
