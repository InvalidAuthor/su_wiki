function validated()
{
    var user = document.getElementsByClassName("email")
    var pass = document.getElementsByClassName("password")


if(user == "su_admin@wiki.com" && pass == "adminroot"){

    alert("Hello Fellow Admin/Trello Staff")
}
else{
    alert("Wrong password please leave")
}
}