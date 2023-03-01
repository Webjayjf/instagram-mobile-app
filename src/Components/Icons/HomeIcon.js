import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={25}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7.904l10 9.802a1 1 0 01.3.714V23.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V18a3 3 0 00-2.824-2.995L11 15a3 3 0 00-2.995 2.824L8 18v5.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.492-.41L0 23.5V11.42a1 1 0 01.3-.714l10-9.802a1 1 0 011.4 0z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
