import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="144" r="125" />
    <rect x="0" y="286" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="321" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="430" rx="15" ry="15" width="97" height="27" />
    <rect x="126" y="420" rx="35" ry="35" width="153" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton;
