const billinput = document.getElementById("billamt");
const tipinput = document.getElementById("tipperc");
const calculatebutton = document.getElementById("calc");
const totalamt = document.getElementById("resultamt");

function calculateTip() {
    const billamt = parseFloat(billinput.value);
    const tipperc = parseFloat(tipinput.value);

    if (isNaN(billamt) || isNaN(tipperc) ) {
        return ;
    }
    
    const tipamt = billamt * tipperc / 100;

    const resultamt = billamt + tipamt;

    totalamt.textContent = "$" + resultamt.toFixed(2);

} ;