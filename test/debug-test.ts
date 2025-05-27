// debug-test.ts
import * as assert from "assert";
import { L5programTypeof, L5typeof, typeofPrim } from "../src/L5/L5-typecheck";
import { isOk, Result } from "../src/shared/result";
import { makePrimOp, parseL5Exp } from "../src/L5/L5-ast";

const logResult = <T>(label: string, r: Result<T>) => {
    console.log(`\n== ${label} ==`);
    if (isOk(r)) {
        console.log("OK:", r.value);
    } else {
        console.log("Failure:", r.message);
    }
};

const main = () => {

    let parsed = parseL5Exp(`(number? 5)`);
    logResult(`Parsed:`, parsed);

    parsed = parseL5Exp(`(number? #t)`);
    logResult(`Parsed:`, parsed);

    parsed = parseL5Exp(`(cons 5 #t)`);
    logResult(`Parsed:`, parsed);
};

main();

