function test(){
    var task = document.getElementById("textInput").value;
    var days = document.getElementById("daysInput").value;
    var text =task;
    var text =text+"<br />";
    var text = text+days+" day(s)";
    
    var holder = document.getElementById("alertDiv");
    var x = document.createElement("alert");
    x.className = "alert alert-primary alert-dismissible";
    
    x.innerHTML=text;
    holder.appendChild(x);


}

document.getElementById("submit").onclick = function(){test()};