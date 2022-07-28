var token;
if(document.cookie.split("=")[1]){
    token=document.cookie.split("=")[1];
}else{
    alert("Session expired. Login again");
    location.replace("./");
}
function logout(){
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.replace("./");
}
document.getElementById('logout').addEventListener("click",logout);