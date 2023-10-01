const getCourseRemainHour = ()=>{
 const items = localStorage.getItem('remainHour')
 if(items){
    return JSON.parse(items)
 }
 return 20
}
const totalCreditHour = ()=>{
 const items = localStorage.getItem('totalCredit')
 if(items){
    return JSON.parse(items)
 }
 return 0
}
const totalPrice = ()=>{
 const items = localStorage.getItem('totalPrice')
 if(items){
    return JSON.parse(items)
 }
 return 0
}


const getCourseListFromLS=()=>{
    const items = localStorage.getItem('course_list')
    if(items){
       return JSON.parse(items)
    }
    return []
}
const saveItemToLS=(newCourseList)=>{
    const courseList = JSON.stringify(newCourseList)
    localStorage.setItem('course_list', courseList)
}

const addItemToLS=(id)=>{
const existCourseList = getCourseListFromLS();
const newCourseList = [...existCourseList,id]
saveItemToLS(newCourseList)

}


export {addItemToLS,saveItemToLS,getCourseListFromLS}