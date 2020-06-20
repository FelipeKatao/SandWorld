class ColiderObjs{
    newCreateColider(objColider,objCol){
        let posObj=document.getElementById(objColider);
        let posObjRect=posObj.getBoundingClientRect()
        let posObj2=document.getElementById(objCol)
        let posObj2Rect=posObj2.getBoundingClientRect()

        if(posObjRect.top<posObj2Rect.top+posObj2.offsetWidth
            && posObjRect.top+posObj2.offsetWidth>posObj2Rect.top
            && posObjRect.left<posObj2Rect.left+posObj2.offsetHeight
            && posObjRect.left+posObj.offsetHeight>posObj2Rect.left
            ) 
        {
           return true
        }
        else{
            return false
        }
    }

    detcetPosChar(objColider,objCol){
        let posObj=document.getElementById(objColider);
        let posObjRect=posObj.getBoundingClientRect()
        let posObj2=document.getElementById(objCol)
        let posObj2Rect=posObj2.getBoundingClientRect()

        if(posObjRect.top<posObj2Rect.top+posObj2.offsetWidth
            && posObjRect.top+posObj2.offsetWidth>posObj2Rect.top
            && posObjRect.left+posObj.offsetHeight>posObj2Rect.left){
            return "TopBase"
        }
    }
}