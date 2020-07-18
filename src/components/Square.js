import React from 'react';

//props are readonly
//Destructuring props
// const props = {
//     onClick: () => "function",
//     value: "x"
// };

// const { value } = props;

const Square = ({ value, onClick }) => (
    <button onClick={ onClick }>
        { value }
    </button>
    );

export default Square;