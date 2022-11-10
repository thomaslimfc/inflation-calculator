let button = document.getElementById('btn-calc');

button.addEventListener('click', () =>
{
    const starting_cpi = parseInt(document.getElementById('starting_cpi').value);
    const ending_cpi = parseInt(document.getElementById('ending_cpi').value);
    const result = document.getElementById('inflation_rate-output');
    let sc_status=false, ec_status=false;

    if(starting_cpi === '' || isNaN(starting_cpi) || (starting_cpi <= 0))
    {
        document.getElementById('sc_error').innerHTML = 'Please provide a valid Starting CPI money amount.';
    }
    else
    {
        document.getElementById('sc_error').innerHTML = '';
        sc_status=true;
    }

    if(ending_cpi === '' || isNaN(ending_cpi) || (ending_cpi <= 0))
    {
        document.getElementById('ec_error').innerHTML = 'Please provide a valid Ending CPI money amount.';
    }    
    else
    {
        document.getElementById('ec_error').innerHTML = '';
        ec_status=true;
    }

    if(sc_status && ec_status)
    {
        const difference_sc_ec = ending_cpi - starting_cpi;
        const inflation_rate = difference_sc_ec / starting_cpi * 100;
        const inflation_rate_2dp = inflation_rate.toFixed(2);
        result.innerHTML = 'CALCULATION RESULT: ' + inflation_rate_2dp + "%";
    }
    else
    {
        alert('The form has errors');
        result.innerHTML = '';
    }
});
