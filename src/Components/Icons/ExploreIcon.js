import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 10c0-5.385-4.365-9.75-9.75-9.75S.25 4.615.25 10s4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l5.99 5.99.084.073a.75.75 0 00.976-1.133l-5.99-5.99A9.712 9.712 0 0019.75 10zm-18 0a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
