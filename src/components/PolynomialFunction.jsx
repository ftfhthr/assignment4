import { useState } from "react"
import "./PolynomialFunction.css"

const PolynomialFunction = () => {

    const [coefficients, setCoefficients] = useState("");
    const [exponents, setExponents] = useState("");
    const [x, setX] = useState("");
    const [funcResult, setFuncResult] = useState("");
    const [result, setResult] = useState("");

    const polynomial = (e) => {
        e.preventDefault();

        const coefficientArray = coefficients.split(" ");
        const exponentArray = exponents.split(" ");

        // check if coefficient and exponent inputs are empty and if they are equal
        if (coefficientArray.length != exponentArray.length || coefficients == "" || exponents == "") {
            setFuncResult("error");
            return;
        }

        let func = "f(x) = ";
        let evaluation = `f(${x}) = `;
        let result = 0;

        for (var i = 0; i < coefficientArray.length; i++) {
            // check if coefficients and exponents are numbers
            if (isNaN(coefficientArray[i]) || isNaN(exponentArray[i])) {
                setFuncResult("error");
                return;
            }

            // create function and calculate result
            func += `${coefficientArray[i]}x^${exponentArray[i]}`;
            result += coefficientArray[i] * Math.pow(x, exponentArray[i]);
            if (i != coefficientArray.length - 1) {
                func += " + ";
            }
        }
        evaluation += result;

        // if x value isn't valid, only return function
        if (isNaN(x) || x == "") {
            setFuncResult(func);
            setResult("error");
        } else {
            setFuncResult(func);
            setResult(result);
        }
    }

    return (
        <form onSubmit={(e) => polynomial(e)}>
            <h1>Polynomial Function</h1>
            <label>Coefficients:</label>
            <input type="text" value={coefficients} onChange={(event) => { setCoefficients(event.target.value) }} required />
            <label>Exponents:</label>
            <input type="text" value={exponents} onChange={(event) => { setExponents(event.target.value) }} required />
            <label>x Value:</label>
            <input type="text" value={x} onChange={(event) => { setX(event.target.value) }} required />
            <label>Polynomial Function (Result):</label>
            <input type="text" className="result" value={funcResult} readOnly />
            <label>Polynomial Evaluation (Result):</label>
            <input type="text" className="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default PolynomialFunction;