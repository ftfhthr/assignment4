import { useState } from "react"
import "./NewtonsMethod.css"

const NewtonsMethod = () => {

    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    const newtons = (e) => {
        e.preventDefault();

        // check if input is empty and if it's a number
        if (isNaN(guess) || guess == "") {
            setResult("error");
            return;
        }

        let root = guess - (6 * Math.pow(guess, 4) - 13 * Math.pow(guess, 3)
            - 18 * Math.pow(guess, 2) + 7 * guess + 6)
            / (24 * Math.pow(guess, 3) - 39 * Math.pow(guess, 2)
            - 36 * guess + 7);

        // calculate closest root
        let secondGuess = guess;
        while (root - secondGuess != 0) {
            secondGuess = root;
            root = secondGuess - (6 * Math.pow(secondGuess, 4) - 13 * Math.pow(secondGuess, 3)
                - 18 * Math.pow(secondGuess, 2) + 7 * secondGuess + 6)
                / (24 * Math.pow(secondGuess, 3) - 39 * Math.pow(secondGuess, 2)
                - 36 * secondGuess + 7);
        }

        setResult(root);
    }

    return (
        <form onSubmit={(e) => newtons(e)}>
            <h1>Newton's Method</h1>
            <label>Root Guess:</label>
            <input type="text" value={guess} onChange={(event) => { setGuess(event.target.value) }} required />
            <label>Root Approximation (Result):</label>
            <input type="text" className="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default NewtonsMethod;