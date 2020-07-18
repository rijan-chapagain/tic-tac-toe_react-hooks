import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

//props are readonly
//Destructuring props
// const props = {
//     onClick: () => "function",
//     value: "x"
// };

// const { value } = props;

const Square = ({ value, onClick }) => (

    <button style={style} onClick={ onClick }>
        { value }
    </button>

    );

export default Square;