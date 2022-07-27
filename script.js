var val = document.getElementById("output").value
var i = 0,ulist;
const arr = [] , arr2 = [] ;
var his = document.getElementById("history")
var histbtn = document.getElementById("histbtn")
function countplus(){
    document.getElementById("output").value=++val
}
function countminus(){
    document.getElementById("output").value=--val
}
function clr(){
    arr[i] = document.getElementById("output").value
    arr2.push(arr[i])
    document.getElementById("output").value=0
    val = 0
        ulist = document.createElement("li")
        ulist.innerHTML = arr2[i]
        his.prepend(ulist)
        console.log(ulist)
    i++;  
}
function hist(){
    if(his.style.display == "block"){
        his.style.display="none"
        
    }
    else{
        his.style.display="block"
    }    
}   
