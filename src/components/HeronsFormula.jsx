import { useState } from 'react'
import "./HeronsFormula.css"

const HeronsFormula = () => {

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [result, setResult] = useState("");

    const heronsFormula = (e) => {
        e.preventDefault();

        // check if inputs are empty and if they are numbers
        if (a == "" || b == "" || c == "" || isNaN(a) || isNaN(b) || isNaN(c)) {
            setResult("error");
            return;
        }

        setResult((Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) -
            Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2))) / 4);
    }

    return (
        <form onSubmit={(e) => heronsFormula(e)}>
            <h1>Heron's Formula</h1>
            <label>Side a:</label>
            <input type="text" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side b:</label>
            <input type="text" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side c:</label>
            <input type="text" value={c} onChange={(event) => { setC(event.target.value) }} required />
            <label>Area (Result):</label>
            <input type="text" className="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default HeronsFormula;