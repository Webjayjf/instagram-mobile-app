import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TagsUserIcon(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.104.637L14.468 3H20.5a3 3 0 013 3v15a3 3 0 01-3 3H3a3 3 0 01-3-3V6a3 3 0 013-3h6.03L11.396.636a.501.501 0 01.708 0zm-.354 1.767L9.944 4.208a1 1 0 01-.707.292H3A1.5 1.5 0 001.5 6v15A1.5 1.5 0 003 22.5h1a5 5 0 015-5h5.5a5 5 0 015 5h1A1.5 1.5 0 0022 21V6a1.5 1.5 0 00-1.5-1.5h-6.24a1 1 0 01-.707-.293L11.75 2.404zM14.5 19a3.5 3.5 0 013.5 3.5H5.5A3.5 3.5 0 019 19h5.5zM11.75 6.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zM8.5 11.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
        fill="#000"
        fillOpacity={0.4}
      />
    </Svg>
  );
}

export default TagsUserIcon;
