import React from "react";
import { useState } from "react";
function Ex2 () {
    const [text, setText] = useState("Hello, World!");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} placeholder="nhap ten"/>
            <p>{text}</p>
        </div>
    );


}

export default Ex2;