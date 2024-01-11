"use client";

import { Button, RadioGroup, cn } from "@nextui-org/react";

import Option from "@/components/Option";

function Quiz() {
  return (
    <article className="max-w-xl mx-auto">
      <h3 className="text-center text-xl mb-2">
        A place full of stories, on shelves stand, Silent, but speaks volumes
        with its pages, what is it?
      </h3>

      <p className="text-center text-md mb-10 text-gray-400">
        Un lugar lleno de historias, en estantes se alzan, Silencioso, pero
        habla mucho con sus páginas, ¿qué es?
      </p>

      <RadioGroup
        classNames={{
          base: cn("*:gap-y-6 *:gap-x-2 *:grid *:grid-cols-2"),
        }}
      >
        <Option value="pencil">Pencil</Option>
        <Option value="library">Library</Option>
        <Option value="desk">Desk</Option>
        <Option value="classroom">Classroom</Option>
      </RadioGroup>

      <footer className="mt-8 flex justify-end">
        <Button color="primary">Siguiente</Button>
      </footer>
    </article>
  );
}

export default Quiz;
