import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        // always make copy for mutation
        const boardCopy = [...board];
        // if user click an occupied square or if game is won, return 
        if(winner || boardCopy[i]) return;
        // Put an X or O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {
        
    }
    
    const renderMoves = () => {
        
    }


    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game;