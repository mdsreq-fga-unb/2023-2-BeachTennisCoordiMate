import React from "react";
import useDragger from "./useDragger";


const DrillElement: React.FC<{id : string, deleteItem :  (idDeleted: string) => void, image: any, elementWidth: number, top: number, left: number}> = ({id, deleteItem, image, elementWidth, top, left}) => {
    useDragger(id, deleteItem);
    return(
        <img id={id} style={{width: `${elementWidth}px`, boxSizing: "content-box", position:"absolute", cursor: "pointer", top: `${top}px`, left: `${left}px`}} alt="Drill Element" src={image}></img>
    );
}

export default DrillElement;