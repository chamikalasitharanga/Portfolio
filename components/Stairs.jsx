import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate:{
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

// calculate the reverse index for staggred delay
const reversIndex = (index)=> {
    const totalsteps =6; //number of steps
    return totalsteps - index - 1;
}


const Stairs = () => {
  return <>
    
    {/* render 6 motion divs, each representing a step of the stories 
    Each div will have same animation defined by the stairAnimation object.
    the delay for each div is calculated sinamically based on its revers index,
    creating a staggered effect with decreasing delay for each subsequent step
*/}

{[...Array(6)].map ((_, index)=> {
    return(
    <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate"
     exit="exit" transition={{duration:0.4,
     ease:'easeInOut',
     delay:reversIndex(index) * 0.1,
    }}
    className="h-full w-full bg-white relative"
    />
    )
})}



</>
}

export default Stairs
