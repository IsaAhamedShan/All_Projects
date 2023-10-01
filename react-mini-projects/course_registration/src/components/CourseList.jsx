
const CourseList = ({eachCourse,index}) => {
    console.log(index)
    return (
        <div>
            <p className="text-slate-600 text-lg">{index+1} . {eachCourse.course_name}</p>
        </div>
    );
};

export default CourseList;