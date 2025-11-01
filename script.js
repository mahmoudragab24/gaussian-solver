const var_select = document.getElementById('var'); //for number of variables
const sub_btn = document.getElementById("submit"); // submit button
const input = document.getElementById("inputs"); // to hold inputs
const dis_sol = document.getElementById("dis_sol"); // to show the data
let num_var = 0; //variables

var_select.addEventListener("change", () => 
{
num_var = parseInt(var_select.value); // get number of variables and convert to integer
input.innerHTML = ""; // clear previous inputs if any
if(num_var>=2 ) // valid number of variables{
{
dis_sol.innerHTML = ""; // clear previous solution if any
generateInputs(num_var); // generate input fields
}
else
{
alert("Please select a valid input (number >=2)");
num_var = 0;
}
});

function generateInputs(n)  // function to generate input fields
{
    const table = document.createElement("table"); // create a table to hold inputs
    table.id = "Table";

    const headerRow = document.createElement("tr");
    for (let j = 0; j < n; j++) {
        const th = document.createElement("th");
        th.textContent = `x${j+1}`;
        headerRow.appendChild(th);
    }
    const Equals = document.createElement("th");
    Equals.textContent = "=";
    headerRow.appendChild(Equals);
    table.appendChild(headerRow);

    for(let i=0; i<n; i++)  // to make the rows (variables)
    {
        const row = document.createElement("tr");
        for(let j=0; j < n + 1; j++) // to make the columns( variables + 1 )
        {
            const cell = document.createElement("td");
            const in_field = document.createElement("input");
            in_field.type = "number";
            in_field.id = `input-${i}-${j}`; //input-id
            cell.appendChild(in_field); // add input field to cell
            in_field.required = true // to make the fill required 
            row.appendChild(cell); // add cell to row
        }
        table.appendChild(row); // add row to table
    }

    const inputDiv = document.getElementById("inputs");
    inputDiv.appendChild(table); // add table to input div
// for testing ============> remove it when start styling the page
    table.style.border = "1px solid white";
    table.style.marginTop = "10px";
    inputDiv.style.color = "white";
}

sub_btn.addEventListener("click", () =>  //submit button
{
    if(num_var === 0 ) // no var selected
    {
        alert("Please select the variables.");
        return;
    }
    const rows = document.querySelectorAll('tr'); // get all rows
    const matrix = []; // get input values => matrix
    for (let i = 1; i < rows.length; i++) 
    {
        const inputs = rows[i].querySelectorAll('input');
        const rowData = [];
        
        for (let input of inputs) 
        {
            const val = parseFloat(input.value); // get value and convert to float
            if (isNaN(val)) // check for valid number
            {
                alert('Please enter valid numbers.');
                return;
            }
            rowData.push(val); // add value 
        }
        matrix.push(rowData); // add row 
    }
     localStorage.setItem("matrix", JSON.stringify(matrix)); // save data in local storage
    localStorage.setItem("num_var", num_var);

    window.location.href = "solution.html"; //go to => solution-page
});
/*
==================================== Last update ===================================
==== 29-10-25 : 2.16 AM ====
- Added input validation to ensure all fields are filled with valid numbers.
- made a local storage function to save the data and land it ==>( solution.js )
- this page should do:-
1- when user choose a number of variables automatically appear the input fields
2- when user press solve the page should go to the solution page and save the data
3- the rest of the program u should find in solution.js
=========================== is there anything unclear text ==> ragab ================
=====================================================================================
*/