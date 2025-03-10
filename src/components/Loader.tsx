import { motion } from 'motion/react';

import crest from '../assets/crest.png';

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <motion.img
        className="w-32 sm:w-36"
        src={crest}
        initial={{ opacity: 0, translateX: '-100%' }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5 }}
      />

      <div className="flex flex-col">
        <motion.h1
          className="text-xl font-bold uppercase"
          initial={{ opacity: 0, translateY: '-50%' }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Lambda Psi Rho
        </motion.h1>
        <motion.hr
          className="h-[2px] bg-black"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.h3
          className="text-lg"
          initial={{ opacity: 0, translateY: '50%' }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Fraternity, Inc.
        </motion.h3>
      </div>
    </div>
  );
}
