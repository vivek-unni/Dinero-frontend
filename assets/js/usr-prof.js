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
var months = {
    'btn-jan': '1',
    'btn-feb': '2',
    'btn-mar': '3',
    'btn-apr': '4',
    'btn-may': '5',
    'btn-jun': '6',
    'btn-jul': '7',
    'btn-aug': '8',
    'btn-sep': '9',
    'btn-oct': '10',
    'btn-nov': '11',
    'btn-dec': '12',
}
function getDetails(month) {
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('res-id').innerHTML=this.responseText;
            console.log(this.responseText)
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/monthly.php", true);
    // xtp.open("POST", "http://localhost/Server/monthly.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xtp.send(`date=${month}&uid=${token}`);
}
getDetails('btn-jan');
Object.keys(months).forEach(element => {
    console.log(element);
    document.getElementById(element).addEventListener("click",()=>{getDetails(months[element])});
});