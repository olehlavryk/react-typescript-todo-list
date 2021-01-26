import React, { useRef } from "react";

export const TodoForm: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  //   const [title, setTitle] = useState<string>("");

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
      ref.current!.value = "";
      //setTitle(event.target.);
    }
  };

  return (
    <div className="mt2">
      <label htmlFor="title" className="active">
        Add new task
      </label>
      <input
        ref={ref}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        type="text"
        className="text"
        id="title"
        placeholder="Enter todo task"
        // value={title}
      />
    </div>
  );
};
