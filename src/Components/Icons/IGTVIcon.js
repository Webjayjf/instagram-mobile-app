import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={26}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.67.646l-.073.085a.75.75 0 00.073.976L9.462 3.5H6.5A6.5 6.5 0 000 10v8.5A6.5 6.5 0 006.5 25h9a6.5 6.5 0 006.5-6.5v-7.125a5.466 5.466 0 01-1.5.352V18.5a5 5 0 01-5 5h-9a5 5 0 01-5-5V10a5 5 0 015-5h8.143a5.462 5.462 0 01.593-1.501h-2.698l1.792-1.792.073-.084a.75.75 0 00-1.134-.977L11 2.916 8.73.646 8.647.574a.75.75 0 00-.976.072zm3.045 11.624l-5.677 1.505-.097.033a.75.75 0 00.481 1.417l4.735-1.255v1.856l.006.096a.75.75 0 00.93.63l5.866-1.495.097-.032a.75.75 0 00-.467-1.422l-4.932 1.257v-1.865l-.006-.096a.75.75 0 00-.936-.629z"
        fill="#262626"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.25a4 4 0 100-8 4 4 0 000 8z"
        fill="#ED4956"
      />
    </Svg>
  )
}

export default SvgComponent
