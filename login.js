// Create login Function here.
function Login(){
    user_name=document.getElementById("playername").value;
    localStorage.setItem("user_name",user_name);
    window.location="gamepage.html";
    
}