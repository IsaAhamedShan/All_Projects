import { useEffect, useState } from "react";
import Course from "./Course";
import CourseList from "./CourseList";
import { addItemToLS, deleteItemFromLS, getCourseListFromLS } from "./functions";
const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("../../public/courses.json")
      .then(res => res.json())
      .then(data => setCourse(data));
  }, []);

  const [courseList, setCourseList] = useState([]);
  const [totalCredRemain, setTotalCredRemain] = useState(20);
  const [totalCred, setTotalCred] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [stateOfAddingOrDelete, setStateOfAddingOrDelete] = useState(false);
  const addToList = course => {
    // setStateOfAddingOrDelete(!stateOfAddingOrDelete)
      if (totalCredRemain - course.credit >= 0  && !courseList.includes(course)) {
        const newList = [...courseList, course];
        setCourseList(newList);
        setTotalCredRemain(totalCredRemain - course.credit);
        setTotalPrice(totalPrice + course.price);
        setTotalCred(totalCred + course.credit);
        console.log(courseList);
        addItemToLS(course.id)
      //   addTotalCreditTOLS(totalCred);
      //   addTotalCredRemain(totalCredRemain);
      }
    if(courseList.includes(course)){
      console.log("cousrse: ",course)
      const newList = courseList.filter(item=>item!=course)
        // console.log(newList)
        setTotalCred(totalCred-course.credit)
        setTotalCredRemain(totalCredRemain + course.credit);
        setTotalPrice(totalPrice - course.price);
        setCourseList(newList);
        deleteItemFromLS(course)

    }
  };
//   retriving data from localstorage
useEffect(()=>{
const existingCourseList = getCourseListFromLS()
let totalCredRemain = 20,totalPrice = 0, totalCredit = 0;

const savedList =[]
    for(const id of existingCourseList){
        const x = course.find(eachCourseDetail=> eachCourseDetail.id === id)
        if(x){
            savedList.push(x)
            console.log(x)
            console.log(totalCred,totalCredRemain, totalPrice);
            totalCredRemain -= x.credit;
            totalPrice += x.price;
            totalCredit += x.credit;
        }
    }
    setTotalCredRemain(totalCredRemain);
    setTotalPrice(totalPrice);
    setTotalCred(totalCredit)
    setCourseList(savedList)

console.log("e: ",existingCourseList)
},[course])



  return (
    <div className="bg-slate-200">
      <div>
        <h3 className="text-3xl text-black font-bold py-4 text-center">
          Course Registration
        </h3>
        </div>

        <div className="flex px-24">
            <div>
              <div className="flex flex-wrap gap-8 ">
                {course.map(course => (
                  <Course
                    key={course.id}
                    course={course}
                    addToList={addToList}
                  ></Course>
                ))}
              </div>
            </div>
            <div className="min-w-[20rem] p-6 bg-white h-full rounded-lg">
              <h4 className="text-blue-500 text-lg font-bold py-6 border-b">
                Credit Hour Remaining {totalCredRemain} hr
              </h4>
              <h3 className="text-black font-bold text-2xl py-4">Course Name</h3>
              {courseList.map(eachCourse => (
                <CourseList
                  key={eachCourse.id}
                  index={courseList.indexOf(eachCourse)}
                  eachCourse={eachCourse}
                ></CourseList>
              ))}
              <p className="font-bold text-black py-3 my-4 border-y">
                Total Credit Hour: {totalCred}
              </p>
              <p className="font-bold text-black">Total Price: {totalPrice} USD</p>
            </div>
        </div>
      
    </div>
  );
};

export default Courses;
