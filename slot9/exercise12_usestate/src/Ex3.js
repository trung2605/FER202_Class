import React from "react";
import { useState } from "react";
function Ex2() {
  // Use the useState hook to create a state variable called "count" with an initial value of 0
  const [isVisible, setDisabble] = useState("false");

  const buttonClicked = () => {
    setDisabble(!isVisible);
  }

  
  return (
    <div>
      <button onClick={buttonClicked}>Increment</button>
      {isVisible && (
        <p style={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          borderRadius: '4px'
        }}>
          Toggle me!
        </p>
      )}

      {/* Thông tin bổ sung */}
      {!isVisible && (
        <p style={{ fontSize: '0.9em', color: '#bbb' }}>
          Nhấn "Show" để hiển thị văn bản.
        </p>
      )}
    </div>
  );
}

export default Ex2;