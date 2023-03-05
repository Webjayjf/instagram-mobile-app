import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GridIcon(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.5h22.5V0H0v22.5zM7 21H1.5v-5.5H7V21zm7-5.5H8.5V21H14v-5.5zm1.5 0H21V21h-5.5v-5.5zM7 8.5H1.5V14H7V8.5zm1.5 0H14V14H8.5V8.5zm12.5 0h-5.5V14H21V8.5zm0-7V7h-5.5V1.5H21zm-14 0H1.5V7H7V1.5zm1.5 0H14V7H8.5V1.5z"
        fill="#262626"
      />
    </Svg>
  );
}

export default GridIcon;
