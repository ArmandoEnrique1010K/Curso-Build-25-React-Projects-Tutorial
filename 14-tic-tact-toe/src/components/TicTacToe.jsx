// 0 1 2
// 3 4 5
// 6 7 8

// Importa las funciones necesarias de React y el archivo de estilos
import { useEffect, useState } from "react";
import "./styles.css";

// Componente 'Square' que representa cada celda en el tablero del juego
function Square({ value, onClick }) {
    return (
        <button onClick={onClick} className="square">
            {/* Muestra el valor 'X' o 'O' en la celda */}
            {value}
        </button>
    );
}

// Componente principal del juego Tic-Tac-Toe
export default function TicTacToe() {
    // Estado para manejar las celdas del tablero (9 celdas en total)
    const [squares, setSquares] = useState(Array(9).fill(""));

    // Estado para determinar de quién es el turno, si de 'X' o 'O'
    const [isXTurn, setIsXTurn] = useState(true);

    // Estado para mostrar el estado del juego (turno actual, ganador, empate)
    const [status, setStatus] = useState("");

    // Función para determinar el ganador del juego
    function getWinner(squares) {
        // Patrón de combinaciones ganadoras posibles
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        // Itera sobre cada patrón para ver si hay un ganador
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            // Comprueba si todas las celdas del patrón tienen el mismo valor (X u O)
            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                // Devuelve el ganador (X o O)
                return squares[x];
            }
        }
        // Si no hay ganador, retorna null
        return null;
    }

    // Maneja el clic en una celda del tablero
    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];

        // Si hay un ganador o la celda ya está ocupada, no realiza ninguna acción
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

        // Actualiza el valor de la celda con 'X' o 'O' dependiendo del turno
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";

        // Cambia el turno al siguiente jugador
        setIsXTurn(!isXTurn);

        // Actualiza el estado del tablero
        setSquares(cpySquares);
    }

    // Reinicia el juego a su estado inicial
    function handleRestart() {
        // Reinicia el turno a 'X'
        setIsXTurn(true);

        // Limpia el tablero
        setSquares(Array(9).fill(""));
    }

    // Efecto para actualizar el estado del juego cuando cambian las celdas del tablero
    useEffect(() => {
        // Si no hay ganador y todas las celdas están ocupadas, se declara un empate
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! Please restart the game`);
        }
        // Si hay un ganador, actualiza el estado con el nombre del ganador
        else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
        }
        // Si el juego sigue en progreso, muestra el jugador del siguiente turno
        else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }
        // El efecto se ejecuta cuando cambian los valores de 'squares' o 'isXTurn'
    }, [squares, isXTurn]);

    // Imprime el estado actual del tablero en la consola
    console.log(squares);

    return (
        <div className="tic-tac-toe-container">
            {/* Renderiza las filas del tablero con los componentes Square */}
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>

            {/* Muestra el estado del juego (ganador, empate o turno siguiente) */}
            <h1>{status}</h1>

            {/* Botón para reiniciar el juego */}
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}
