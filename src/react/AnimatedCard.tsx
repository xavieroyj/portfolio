import { motion } from "motion/react"
import type { ReactNode } from 'react';

interface AnimatedCardProps {
  title: string;
  description: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  href?: string;
}

export default function AnimatedCard({ title, description, direction, href }: AnimatedCardProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -1000, opacity: 0 };
      case 'right':
        return { x: 1000, opacity: 0 };
      case 'top':
        return { y: -1000, opacity: 0 };
      case 'bottom':
        return { y: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        damping: 35,
      }}
      whileHover={{ scale: 1.05 }}
      className="border rounded-lg px-4 py-3 hover:border-purple-500 hover:cursor-pointer dark:hover:bg-purple-500 dark:hover:text-white"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="pt-2 text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}