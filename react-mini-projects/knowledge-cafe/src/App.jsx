import Header from './components/header/Header'
import './App.css'
import Blogs from './components/blogs/Blogs'
function App() {

  return (
    <>
    <div className='px-0 md:px-10 lg:px-32 xl:px-60 m-auto'>
    <Header></Header>
    <Blogs></Blogs>
    </div>
    </>
  )
}
export default App
