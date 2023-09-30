import { useEffect, useState } from "react";
import BlogsData from "../blogsData/BlogsData";
import { addItemToLs, deleteItem, getItem,getTotalTime,saveTotalTimeToLS } from "../functions/functionsList";
import Bookmark from "./bookmark";



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const [bookmark, setBookMark] = useState([]);

  const addToList = each => {
    const foundEach = bookmark.includes(each);
    if (foundEach == false) {
    //   console.log(foundEach);
      const newList = [...bookmark, each];
      setBookMark(newList);
      addItemToLs(each.id)
    } else {
      const newList = bookmark.filter(items => items != each);
      setBookMark(newList);
      deleteItem(each.id)
    }
    // console.log(bookmark)
  };
  useEffect(()=>{
    if(blogs.length>0){
    const storedBookmark = getItem()
    const savedBookmark = [];
    console.log('boo ',bookmark)
    for(const id of storedBookmark){
        //here we are iterating the list of blogs to find the item id we get from the storage
        const b = blogs.find(bookmark=>bookmark.id === id);
        if(b){
            savedBookmark.push(b)
        }
        console.log("saved bookmark :",savedBookmark)
        setBookMark(savedBookmark)
    }
}
const storedTotalTime = getTotalTime()

setReadingTime(storedTotalTime)
  },[blogs])

  const [readingTime, setReadingTime] = useState(0);

  const readingTimeAdd = reading_time => {
    const totalTime = readingTime + reading_time
    setReadingTime(readingTime + reading_time);
    addItemToLs(reading_time)
  };

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div>
        {blogs.map(eachBlogData => (
          <BlogsData
            key={eachBlogData.id}
            readingTimeAdd={readingTimeAdd}
            eachBlogData={eachBlogData}
            addToList={addToList}
          ></BlogsData>
        ))}
      </div>
      <div className="border p-8  md:max-h-[80vh] md:overflow-auto min-w-[350px]">
        <div className="p-4 rounded-md border-purple-300 border bg-purple-200 text-purple-500 text-lg text-center my-2 font-bold">
          <p>Spends on Time read {readingTime} min</p>
        </div>
        <h1 className="text-2xl font-bold text-center">
          Bookmarked Blogs: {bookmark.length}
        </h1>
        <ul className=" w-max h-[50px]">
          {bookmark.map((eachBlogData, idx) => (
            <Bookmark eachBlogData={eachBlogData} key={idx}></Bookmark>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
