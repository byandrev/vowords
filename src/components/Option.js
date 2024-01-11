import { Radio, cn } from "@nextui-org/react";

function Option({ value, children }) {
  return (
    <Radio
      value={value}
      classNames={{
        base: cn(
          "w-full max-w-[none] flex transition-all border-2 rounded-md cursor-pointer data-[selected=true]:border-primary hover:border-primary hover:bg-primary-100",
        ),
      }}
    >
      {children}
    </Radio>
  );
}

export default Option;
