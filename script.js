let count=0
let countEl=document.getElementById("count-el")
let preCount=document.getElementById("pre-count")
function increment(){
    // console.log("clicked")
    count=count+1
    countEl.innerHTML=count
    // console.log(count)
}
function decrement(){
    count=count-1
    if(count>=0){
        countEl.innerHTML=count
    }
}
function reset(){
    count=0
    countEl.innerHTML=count
}
function save(){
    let countStr= count+" - "
    preCount.textContent+=countStr
}



