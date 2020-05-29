function test(){

    if(valid==true){

    var task = document.getElementById("textInput").value;
    var days = document.getElementById("daysInput").value;
    var text =task;
    var text =text+"<br />";
    var text = text+days+" day(s)";
    
    var holder = document.getElementById("alertDiv");
    var x = document.createElement("alert");
    x.className = "alert alert-primary alert-dismissible";
    x.style.fontSize = "30px"
    x.innerHTML=text;

    if(days>=7){
        x.className = "alert alert-secondary alert-dismissible";
    }

    else if(days<7 && days>2){
        x.className = "alert alert-warning alert-dismissible"
    }

    else{
        x.className = "alert alert-danger alert-dismissible"
    }
    
    holder.appendChild(x);
    }

}

function validateItems(){
    var days = document.getElementById("daysInput").value;

    if(days ==""){
        alert("Please enter a value for 'Days to comeplete'.");
        return valid=false;
    }

    else if(days<1){
        alert("Please enter a value no less than 1.");
        return valid=false;
    }

    else{
        return valid=true;
    }
}

document.getElementById("submit").onclick = function(){test()};