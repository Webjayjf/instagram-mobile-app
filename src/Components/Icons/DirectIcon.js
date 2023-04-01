import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DirectIcon(props) {
  return (
    <Svg
      width={24}
      height={21}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.934 1.788L12.25 20.04a.75.75 0 01-1.371-.184L8.128 9.6l-.023-.032a.755.755 0 01-.052-.109L.533 1.94a.75.75 0 01.53-1.281h21.224c.58 0 .94.629.648 1.129zm-2.7 1.643L9.663 9.535l2.198 8.2L20.234 3.43zM2.874 2.159l16.565-.001L8.937 8.222 2.874 2.159z"
        fill={props.color ? props.color : "#262626"}
      />
    </Svg>
  );
}

export default DirectIcon;
