import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <div className="">
            <motion.div 
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y:  0 }}
                transition={{ duration: 0.9 }}
            >
                Hi!
            </motion.div>
        </div>
    )
}

export default LandingPage;