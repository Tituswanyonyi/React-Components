import React from "react";
function Event() {
    const shoot = () => {
        alert("Great Shot!");
    }
    return (
        <button onClick={shoot}>Take the Shot</button>
    )
}
export default Event;