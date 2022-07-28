function auth(){
    console.log("started")
    var name=document.getElementById('email').value;
    var pass=document.getElementById('password').value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        if(this.response){
            var res = this.responseText.split("<br>");
            if(res[1]){
                document.cookie=`token = ${res[1]}`;
                location.replace("./Dashboard-user.html");
            }else{
                document.getElementById('pass-er').style.display="block";
                setTimeout(()=>{document.getElementById('pass-er').style.display="none";},3000);
            }
        }else{
            document.getElementById('usr-er').style.display="block";
            setTimeout(()=>{document.getElementById('usr-er').style.display="none";},3000);
        }
       }
     };
    xhttp.open("POST", "https://dinero-server.herokuapp.com/auth.php", true);
    // xhttp.open("POST","http://localhost/Server/auth.php",true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`fname=${name}&pass=${pass}`);
 }
 document.getElementById('submit').addEventListener("click",()=>{auth()})