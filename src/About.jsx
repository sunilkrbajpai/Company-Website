import React from "react";
import skb from "../src/images/skb2.png";
import Common from "./Common";

function About() {
  return (
    <Common
      name="Welcome to About page"
      imgsrc={skb}
      visit="/contact"
      btname="Contact now"
    />
  );
}

export default About;
