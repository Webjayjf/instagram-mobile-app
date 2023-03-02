import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.86 1.179V22.83a1 1 0 001.703.712l8.548-8.43 8.549 8.43a1 1 0 001.702-.712V1.179a.5.5 0 00-.5-.5H1.361a.5.5 0 00-.5.5zm1.5 20.457V2.179h17.502v19.457L11.813 13.7a1 1 0 00-1.404 0l-8.048 7.936z"
        fill="#262626"
      />
    </Svg>
  );
}

export default SvgComponent;
