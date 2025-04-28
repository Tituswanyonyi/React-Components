import React from "react";


function Garage() {
    return <h2>Garage: I house the patient</h2>;
}

const Car = () => {
    return (
        <>
            <h1>Car: I am the patient </h1>
            < Garage />
        </>
    );
}

export default Car; 