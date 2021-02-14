function validated()
{
    var user = document.getElementsByTagName("email");
    var pass = document.getElementsByTagName("password");

if(user == "su_admin@wiki.com" && pass == "adminroot"){

    alert("Hello Fellow Admin/Trello Staff")
    return false;
}
}