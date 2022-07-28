
function table_view(){
   var req = new XMLHttpRequest();
   req.open('GET','http://localhost/Server/');
   req.onload = function() {
      console.log(this)
      document.getElementById('output_body').innerHTML=this.response;
   }
   req.send();
}

function snt(){
   var name=document.getElementById('email').value;
   var pass=document.getElementById('pass').value; 
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        table_view();
      }
    };
   xhttp.open("POST", "http://localhost/Server/update.php", true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send(`fname=${name}&pass=${pass}`);
}
table_view();
document.getElementById('check').addEventListener("click",()=>{snt()})