"use client";

import { Button, RadioGroup, cn } from "@nextui-org/react";

import Option from "@/components/Option";
import { useState } from "react";

function Question({ id, title, options, handleResponse }) {
  const [value, setValue] = useState("a");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSelect = () => {
    handleResponse(id, value)
  }

  return (
    <article className="w-full max-w-xl mx-auto">

      <h3 className="text-center text-xl mb-2">
        {title.en}
      </h3>

      <p className="text-center text-md mb-10 text-gray-400">
        {title.es}
      </p>

      <RadioGroup
        value={value}
        onChange={handleChange}
        classNames={{
          base: cn("*:gap-y-6 *:gap-x-2 *:grid *:grid-cols-2"),
        }}
      >
        <Option value="a">{options.a}</Option>
        <Option value="b">{options.b}</Option>
        <Option value="c">{options.c}</Option>
        <Option value="d">{options.d}</Option>
      </RadioGroup>

      <footer className="mt-8 flex justify-end">
        <Button color="primary" onClick={handleSelect}>Siguiente</Button>
      </footer>
    </article>
  );
}

export default Question;
