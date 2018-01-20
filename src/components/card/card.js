function validateForm()
{
    const x=document.forms["data"]["number-card","month", "year", "name", "code" ].value;
    if (x===null || x==="")
    {
        alert("Необходимо заполнить поле!");
        return false;
    }
}
