import CardPost from "./UI/CardPost"

const CardPage = ({ blogs }) => {
  return (
    <div className="min-h-screen bg-white grid grid-cols-1 grid-flow-row justify-items-center content-center gap-y-10 desktop:gap-y-16">
      {blogs.map(blog => {
        return <CardPost title={blog.title} description={blog.description} mobile_img={blog.mobile_img} desktop_img={blog.desktop_img} addition_css={blog.addition_css}/>
      })}

    </div>
  )
}

export default CardPage