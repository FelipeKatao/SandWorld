class ColiderObjs{
    createColider(objColider,objCol){
    }
    newCreateColider(objColider,objCol,actionFunction){
        let objX=document.getElementById(objColider).getBoundingClientRect().left 
        let objY=document.getElementById(objColider).getBoundingClientRect().top
        let obj1X=document.getElementById(objCol).getBoundingClientRect().left
        let obj1Y=document.getElementById(objCol).getBoundingClientRect().top
        
        console.log("ObjColider x,y: "+objX+" ; "+objY)
        console.log("ObjCol x,y: "+obj1X+" ; "+obj1Y)
        if(obj1Y==objY && obj1X-objX>10){
            actionFunction()
        }
        if(obj1Y==objY && obj1X-objX>100){
            actionFunction()
        }
    }
}