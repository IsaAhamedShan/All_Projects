
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
const deleteItemFromLS=(course)=>{
const getExistItems = getCourseListFromLS();
const itemsAfterDelete = getExistItems.filter(items=>items!= course.id);
saveItemToLS(itemsAfterDelete)
}


export {addItemToLS,saveItemToLS,getCourseListFromLS,deleteItemFromLS}