function validateForm()
{
    const x=document.forms["data"]["number-card"].value;
    if (x===null || x==="")
    {
        alert("Необходимо заполнить поле!");
        return false;
    }
}