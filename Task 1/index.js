let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function log(){
    outputScreen.value = Math.log(outputScreen.value);
}

function pow(){
    outputScreen.value = Math.pow(outputScreen.value,2);
}

function pi(){
    outputScreen.value = 3.14;
}