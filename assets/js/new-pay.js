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
}document.getElementById('logout').addEventListener("click",logout);
const form = document.getElementById('form')
var gender="";
document.getElementById('gender_0').addEventListener("click",()=>{gender=document.getElementById('gender_0').value;})
document.getElementById('gender_1').addEventListener("click",()=>{gender=document.getElementById('gender_1').value;})
form.onsubmit=(e)=>{
    console.log(e)
    e.preventDefault();
    var username=document.getElementById('username').value;
    var empname = document.getElementById('empname').value; 
    var uid = document.getElementById('uid').value; 
    var pass = document.getElementById('pass').value; 
    var empid = document.getElementById('empid').value; 
    var age = document.getElementById('age').value; 
    var dob = document.getElementById('dob').value; 
    // var gender = document.getElementById('gender').value; 
    var doj = document.getElementById('doj').value; 
    var desig = document.getElementById('desig').value; 
    var ofc = document.getElementById('ofc').value; 
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    };
    // xtp.open("POST", "https://dinero-server.herokuapp.com/new-emp.php", true);
    // xtp.open("POST", "http://localhost/Server/new-emp.php", true);
    // xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xtp.send(`username=${username}&empname=${empname}&uid=${uid}&pass=${pass}&empid=${empid}&age=${age}&dob=${dob}&gender=${gender}&doj=${doj}&desig=${desig}&ofc=${ofc}`);
}