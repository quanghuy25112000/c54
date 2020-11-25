let yes=document.getElementById(`yes`)
let ans=document.getElementsByClassName(`answer`)[0]
let no=document.getElementById(`no`)
no.addEventListener(`click`, function () {
    alert(`Ko lấy thì thôi`)
})

yes.addEventListener(`click`, ()=>{
    if (ans.style.flexDirection == "row") 
        ans.style.flexDirection = "row-reverse";
    else 
        ans.style.flexDirection = "row";
          
    
})
