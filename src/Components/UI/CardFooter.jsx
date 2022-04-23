import { motion } from 'framer-motion'

const CardFooter = ({ className }) => {
  return (
    <motion.div 
    initial={{ x: -50, opacity: 0, transition: { duration: 0 }}}
    whileInView={{ 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }}        
    viewport={{ once: true }}
    className={`flex mx-10 flex-col justify-center items-center shadow-lg rounded-2xl p-5 desktop:p-16 bg-white max-w-2xl ${className}`}>
      <div id="title" className='font-poppins font-semibold text-2xl text-center '>
        Ready To Build Your Community?
      </div>
      <button id="button" className='mt-5 desktop:mt-10 bg-lightpink px-16 py-3 rounded-full font-opensans font-medium text-white text-md desktop:py-5 shadow-md transition duration-200 ease-in hover:opacity-50'>
        Get Started For Free
      </button>
      
    </motion.div>
  )
}

export default CardFooter