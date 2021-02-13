function validated()
{
    var user = document.getElementsByTagName("username");
    var pass = document.getElementsByTagName("password");

if(user == "su_admin@wiki.com" && pass == "adminroot")
{
    alert("Hello Fellow Admin!")
    return false;
}
else{
    alert("Fuck off, dont try to login into a staff account, bitch.")
}

}