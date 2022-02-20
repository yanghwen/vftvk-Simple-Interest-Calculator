function compute()
{
    var principal = document.getElementById("principal").value;
    //var principal_int = Number(principal);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var results = principal*rate/100*years;
    var year_fin = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML =
    "If you deposit <mark>"+ principal + "</mark>,"+
    "<br/> at an interest rate of <mark>"+ rate +"%</mark>."+
    "<br/> You will receive an amount of <mark>" + results +"</mark>,"+
    "<br/>in the year <mark>" + year_fin + "</mark>.<br/>"
    ;
}

function validate_amount () {
    var principal =document.getElementById("principal").value;
    if (principal<=0)
    {
        alert("Enter a number greater than zero.");
        document.getElementById("principal").focus();
    }
}

function change_rate(){
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_change").innerText=rate+"%";
}
