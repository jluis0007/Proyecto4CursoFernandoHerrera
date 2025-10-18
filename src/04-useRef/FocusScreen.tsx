import { useRef } from "react";

export const FocusScreen = () => {

const inputRef = useRef<HTMLInputElement>(null);

const handleClick = () => {
console.log(inputRef.current?.value);
inputRef.current?.select();
};


  return (
  <div
    className="bg-gradient flex flex-col gap-4"
  >
<h1 
className="text-2xl font-thin text-white"
>Foucus Screen</h1>
<input
ref={inputRef}
className="bg-white text-black px-4 py-2 rounded-md"
 autoFocus
></input>
<button
className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
onClick={handleClick}
>

    Set focus
</button>
  </div>
  );
};
