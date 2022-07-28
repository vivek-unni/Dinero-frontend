var token;
if(document.cookie.split("=")[1]){
    token=document.cookie.split("=")[1];
    if(!(token.split('-')[1])){
        alert("Not an admin. Login with proper credentials");
    location.replace("./");
    }
}else{
    alert("Session expired. Login again");
    location.replace("./");
}
function logout(){
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.replace("./");
}
document.getElementById('logout').addEventListener("click",logout);

function getemployees(){
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('table-out').innerHTML=this.responseText;
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/view-emp.php", true);
    // xtp.open("POST", "http://localhost/Server/view-emp.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xtp.send();
}
getemployees();