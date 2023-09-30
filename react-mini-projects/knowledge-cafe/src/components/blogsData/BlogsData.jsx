import { useEffect, useState } from "react";

const BlogsData = ({eachBlogData,addToList,readingTimeAdd}) => {
//   console.log(eachBlogData);
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = eachBlogData;

  return (
    <div className="w-[100%] xl:w-[60%] border-b border-gray-300 p-12">
      <img src={cover} className="rounded-md" alt="" />
      <div>
        <div className="flex justify-between items-center [&>*]:text-[3vw] md:[&>*]:text-[1.5vw] xl:[&>*]:text-[.8vw]">
          <div className="flex justify-start items-center py-8 w-[75%]">
            <img src={author_img} className="w-[30px] h-[30px]" alt="author image" />
            <div className="pl-4">
              <p>{author}</p>
              <p className="">mar 14 (4 days ago)</p>
            </div>
          </div>
          <div className="py-8 w-max flex justify-center items-center">
            <p className="">{reading_time} min read </p>
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1" className="cursor-pointer" onClick={()=>addToList(eachBlogData)}/>
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/12B886/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>
          </div>
        </div>
      </div>
      <div className="[&>*]:py-3">
          <h3 className="text-4xl font-bold">How to get your first job as a self-taught programmer</h3>
          <p>#beginners # programming</p>
          <button className="underline" onClick={()=>readingTimeAdd(reading_time)}>mark as read</button>
      </div>
    </div>
  );
};

export default BlogsData;
