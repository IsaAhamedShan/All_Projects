 export const getItem = ()=>{
    const storedAddString = localStorage.getItem('bookmark');
    if(storedAddString){
        return JSON.parse(storedAddString)
    }
    return []
}

export const saveItemToLs =(bookmark)=>{
    const idStringified = JSON.stringify(bookmark)
    // console.log(idStringified)
     localStorage.setItem('bookmark',idStringified)
}
export const deleteItem = id=>{
    const itemList = getItem();
    console.log(itemList)
    const newList = itemList.filter(item=>item !== id)
    saveItemToLs(newList)
}
export const saveTotalTimeToLS = (totalRead)=>{
const totalReadStringified = JSON.stringify(totalRead)
localStorage.setItem('totalReadTime',totalReadStringified)
}
export const addItemToLs = id =>{
    if(typeof(id) === String){
        const bookmark = getItem()
        // console.log(cart)
        bookmark.push(id)
        saveItemToLs(bookmark)
    }
    else{
        let totalRead = getTotalTime()
        totalRead += id
        saveTotalTimeToLS(totalRead)
    }
    
}

export const getTotalTime = () =>{
    const storedTotalTime = localStorage.getItem('totalReadTime');
    if(storedTotalTime){
        return JSON.parse(storedTotalTime)
    }
    return 0
}
