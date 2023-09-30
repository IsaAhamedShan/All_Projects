const Bookmark = ({eachBlogData}) => {
    const {title} = eachBlogData
console.log(title)
    return (
        <div >
            <p className="border max-w-[280px] flex justify-center items-center p-3 text-center my-2" >{title}</p>
        </div>
    );
};

export default Bookmark;