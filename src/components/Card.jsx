import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-700 px-8 py-10 text-white overflow-hidden">
        <FaRegFileAlt/> 
        <p className="text-sm mt-5 leading-tight font-semibold text-zinc-300">{data.desc}
        </p>
        <div className="footer absolute bottom-0   w-full left-0">
            <div className="flex justify-between mb-3 py-3 px-8">
                <h5>{data.filesize}</h5>
                <span className="w-7 h-7 cursor-pointer bg-green-300 rounded-full flex items-center justify-center">
                    {data.close ? <IoCloseOutline color="#000"/> : <LuDownload size=".8em" color="#000"/>}
               

                </span>
            </div>
            {
              data.tag.isOpen && 
              <motion.div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
              <h3 className="text-sm cursor-pointer font-semibold text-zinc-300">{data.tag.tagTitle}</h3>
           </motion.div> 
            }
            
        </div>  
    </motion.div>
    
  )
}

export default Card
