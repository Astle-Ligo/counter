var val = document.getElementById("output").value
var i = 0,ulist,date;
const arr = [] , arr2 = [] ;
var his = document.getElementById("history")
var box2 = document.getElementById("box2")
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
function countplus(){
    if(box2.style.display == "block"){
        box2.style.display="none"
        
    }
    document.getElementById("output").value=++val
}
function countminus(){
    if(box2.style.display == "block"){
        box2.style.display="none"
        
    }
    document.getElementById("output").value=--val
}
function clr(){
    if(box2.style.display == "block"){
        box2.style.display="none"
        
    }
    arr[i] = document.getElementById("output").value
    arr2.push(arr[i])
    document.getElementById("output").value=0
    val = 0
        ulist = document.createElement("li")
        ulist.innerHTML = arr2[i]
        var dt = new Date();
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let time = hours + ':' + minutes  + ':' + seconds + " " + ampm;
        date = document.createElement("p")
        date.innerHTML ="(" + time + ")" + "<br>"
        his.prepend(ulist , date)
    i++;  
}
function hist(){
    if(box2.style.display == "block"){
        box2.style.display="none"
        
    }
    else{
        box2.style.display="block"
    }    
}   
document.body.addEventListener('keydown', function(event){
            const key = event.key;
            switch (key) {
                case "ArrowUp":
                    countplus()    
                break;
                case "ArrowDown":
                    countminus() 
                break;
                case "Enter":
                    clr()
                break;
                case "+":
                    countplus()    
                break;
                case "-":
                    countminus() 
                break;
            }
        });
