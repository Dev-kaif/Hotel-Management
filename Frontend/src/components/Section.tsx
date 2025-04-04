
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 px-4 ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
