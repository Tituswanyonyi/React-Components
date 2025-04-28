import React from "react";

function Brand(props) {

    return <h2>I am a motorcar of brand {props.brand}!</h2>;
}
const myElement = <Brand brand="Mercedez(E-Series)" />;

export { Brand as default, myElement };