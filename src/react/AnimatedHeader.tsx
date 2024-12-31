import { motion } from "motion/react"

export default function AnimatedHeader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut"
            }}
        >
            <h1 className="text-4xl font-bold">
                Hi I'm <span className="text-purple-500">Xavier</span>
            </h1>
            <p className="pt-4 font-mono dark:text-gray-400">
                I'm an aspiring software engineer and I love to build things. <br />
                I am currently in my final year studying Computing Science at the
                Singapore Institute of Technology.
            </p>
        </motion.div>
    );
}