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
