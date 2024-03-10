import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: React.FC<Props> = (props) => {
  return <button>{props.text}</button>;
};

export default React.memo(Button);
