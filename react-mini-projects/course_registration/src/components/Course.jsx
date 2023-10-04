const Course = ({ course,addToList,addedToStateOrNot}) => {
  const { course_name, id, price, credit, course_detail, course_thumbnail } =
    course;
  // console.log(course);
  return (
    <div className="max-w-[25rem] flex flex-col bg-white text-slate-500 p-5 rounded-lg">
      <img className="" src={course_thumbnail} alt="" />
      <div className="h-20">
        <p className="text-lg font-bold text-black py-2">{course_name}</p>
      </div>
      <p>{course_detail}</p>
      <div className="flex justify-between py-6">
        <div className="flex flex-row justify-center items-center">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/us-dollar.png"
            alt="us-dollar"
          />
          <p className="text-center">price : {price}</p>
        </div>
        <div className="flex flex-row">
          <img className="mx-2"
            width="24"
            height="24"
            src="https://img.icons8.com/ios-glyphs/30/open-book--v1.png"
            alt="open-book--v1"
          />
          <p>Credit : {credit} hrs</p>
        </div>
      </div>
      <button className="btn-md btn btn-primary" onClick={()=>{addToList(course)}}>select</button>
    </div>
  );
};

export default Course;
