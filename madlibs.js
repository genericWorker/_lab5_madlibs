function upper(el) {  
    var str = el.value;  
    el.value = str.toUpperCase();
}

function createMessage() {
    document.getElementById("result").style.display = "inline";
    document.getElementById("word1").innerHTML=
        document.getElementById("pluralNoun").value;
    document.getElementById("word2").innerHTML=
        document.getElementById("noun1").value;
    document.getElementById("word3").innerHTML=
        document.getElementById("noun2").value;
    document.getElementById("word4").innerHTML=
        document.getElementById("song").value;
    document.getElementById("word5").innerHTML=
        document.getElementById("verb").value;
 
    upper(document.getElementById("pluralNoun")); 
    upper(document.getElementById("noun1")); 
    upper(document.getElementById("noun2")); 
    upper(document.getElementById("song")); 
    upper(document.getElementById("v")); 
}

function goAgain() {
    location.reload(); 
    return false; 
}