var val = document.getElementById("output").value
var i = 0,j=0 , li;
var his = document.createElement("h1")
const arr = [] , arr2 = [] ;
var box = document.getElementById("box1")
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
    console.log(arr2[i])
    i++;
    
}
function hist(){
    if(box.style.display == "block"){
        box.style.display="none"
    }
    else{
        if(i>4)
    {
     for(j=i-1;j>=i-5;j--){
        li = document.createElement("li")
        li.innerHTML = arr2[j]
        box.appendChild(li)
    }
    }
    else{
        for(j=i-1;j>=0;j--){
            li = document.createElement("li")
            li.innerHTML = arr2[j]
            box.appendChild(li)
        }
    }
    box.style.display="block"
    }    
}
