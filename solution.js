const dis_sol = document.getElementById("display");
// for testing ============> remove it when start styling the page
dis_sol.style.color = "black";
dis_sol.style.fontFamily = "monospace";
dis_sol.style.fontSize = "18px";
dis_sol.style.whiteSpace = "pre-wrap";
dis_sol.style.marginTop = "20px";

console.log("Solution page loaded.");

const matrixData = localStorage.getItem("matrix");
if (!matrixData) {
    dis_sol.innerHTML = "No data found! Please go back and enter equations.";
} 
else {
    const matrix = JSON.parse(matrixData);
    console.log("Matrix received:", matrix);

    const result = gauss_solver(matrix);
    console.log("Solver result:", result);

    if (typeof result === "string") {
        typeWriter(result, 0);
    } else {
        let text = "Solution Steps:\n";
        result.steps.forEach(s => (text += s + "\n"));
        text += "\nFinal Solution:\n";
        result.solution.forEach(s => (text += s + "\n"));
        typeWriter(text, 0);
    }
}

// Gaussian Solver 
function gauss_solver(matrix) {
    const n = matrix.length;
    let mat = matrix.map(r => [...r]);
    let steps = [];

    for (let i = 0; i < n; i++) {
        if (mat[i][i] === 0) { // if first element is 0 we will swap the row
            for (let k = i + 1; k < n; k++) {
                if (mat[k][i] !== 0) {
                    steps.push(`Swapping R${i + 1} ↔ R${k + 1}`); // confirm swap
                    [mat[i], mat[k]] = [mat[k], mat[i]];
                    break;
                }
            }
        }

        if (mat[i][i] === 0) { // if first element is 0 again!!!
            return "No unique solution exists."; 
        }
        let pivot = mat[i][i]; // divide the first element by pivot (المحور) = 1
        if (pivot !== 1) {
            steps.push(`R${i + 1} / ${pivot} ==> R${i + 1}`); // confirm division
            for (let j = i; j <= n; j++) {
                mat[i][j] /= pivot;
            }
        }
        for (let k = i + 1; k < n; k++) { // make the elements below = 0
            let factor = mat[k][i]; // to cancel the element
            if (factor !== 0) {
                steps.push(`R${k + 1} - (${factor})R${i + 1} ==> R${i + 1}`); // confirm subtraction
                for (let j = i; j <= n; j++) {
                    mat[k][j] -= factor * mat[i][j];
                }
            }
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let k = i - 1; k >= 0; k--) {
            let factor = mat[k][i];
            if (factor !== 0) {
                steps.push(`R${k + 1} - (${factor})R${i + 1} ==> R${i + 1}`);
                for (let j = i; j <= n; j++) {
                    mat[k][j] -= factor * mat[i][j];
                }
            }
        }
    }

    // Extract solutions
    let solution = [];
    for (let i = 0; i < n; i++) {
        solution.push(`X${i + 1} = ${Math.round(mat[i][n] * 10000) / 10000}`);
    }

    return { steps, solution };
}

// Typewriter Effect 
function typeWriter(txt, i) {
    if (i < txt.length) {
        dis_sol.innerHTML += txt.charAt(i);
        setTimeout(() => typeWriter(txt, i + 1), 30);
    }
}

console.log("page loaded")
console.log("Matrix Data Found:", localStorage.getItem("matrix"));
console.log("Num_var:", localStorage.getItem("num_var"));
/*
==================================== Last update ===================================
==== 29-10-25 : 2.23 AM ====
- made the gussian function
- add the final touches in typewrite function
- this page should do:-
1- when user choose a number of variables automatically appear the input fields
2- when user press solve the page should go to the solution page and save the data
3- the rest of the program u should find in solution.js
=========================== is there anything unclear text ==> ragab
=====================================================================================
*/