import { motion } from "framer-motion"

const CardPost = ({ title, description, mobile_img, desktop_img, addition_css, delay }) => {
  return (
    <motion.div 
    initial={{
      y: 100,
      opacity: 0
    }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: delay
      }
    }}
    viewport={{ once: true }}
    className={`flex mx-10 flex-col desktop:flex-row justify-center desktop:justify-between items-center space-x-10 shadow-lg rounded-2xl p-5 desktop:p-20 ${addition_css}`}>
      <div className='order-2 mt-10 desktop:mt-0 desktop:order-1 '>
        <div id="title" className='font-poppins font-semibold text-2xl desktop:text-3xl text-center desktop:text-left'>
          {title}
        </div>
        <div id="description" className='mt-3 max-w-xl desktop:mr-10 desktop:max-w-md text-center font-opensans font-medium text-md text-grayish desktop:text-left'>
          {description}
        </div>
      </div>

      <div id="image" className='order-1 desktop:order-2 relative right-5'>
          {window.innerWidth >= 1440 ? desktop_img : mobile_img}
      </div>
    </motion.div>
  )
}

export default CardPost