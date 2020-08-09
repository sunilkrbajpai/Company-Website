import React from "react";
import skb from "../src/images/skb.svg";
import Common from "./Common";

function Home() {
  return (
    <Common
      name="Grow your business with"
      imgsrc={skb}
      visit="/service"
      btname="Get started"
    />
  );
}

export default Home;
