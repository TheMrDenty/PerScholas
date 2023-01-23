import { useContext } from "react";
import React from 'react';
import Lineage from "../context/Lineage";

function GrandChild({grandMother, grandFather}) {
    const value = useContext(Lineage)
  return (
    <div>
        <h1>My grandmothers name is {grandMother}</h1>
        <h1>My grandfathers name is {grandFather}</h1>
        <h3>{value.grandMa} and {value.grandPa}</h3>
    </div>
  )
}

export default GrandChild