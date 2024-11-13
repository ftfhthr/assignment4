import { useState } from "react"
import "./AmbiguousCase.css"

const AmbiguousCase = () => {

    const [angle, setAngle] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");

    const ambiguousCase = (e) => {
        e.preventDefault();

        // check if inputs are empty and if they are numbers
        if (angle == "" || a == "" || b == "" || isNaN(angle) || isNaN(a) || isNaN(b)) return "error";

        const h = b * Math.sin(angle * Math.PI / 180);
        if (angle <= 90) {
            if (a < h) {
                setResult("no triangle");
            } else if (a == h) {
                setResult("right triangle");
            } else if (a > b) {
                setResult("one triangle");
            } else if (h < a && a < b) {
                setResult("two triangles (ambiguous case)");
            } else {
                setResult("error");
            }
        } else {
            if (a < b || a == b) {
                setResult("no triangle");
            } else if (a > b) {
                setResult("one triangle");
            } else {
                setResult("error");
            }
        }
    }

    return (
        <form onSubmit={(e) => ambiguousCase(e)}>
            <h1>Ambiguous Case</h1>
            <label>Angle:</label>
            <input type="text" value={angle} onChange={(event) => { setAngle(event.target.value) }} required />
            <label>Side a:</label>
            <input type="text" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side b:</label>
            <input type="text" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Area (Result):</label>
            <input type="text" className="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default AmbiguousCase;