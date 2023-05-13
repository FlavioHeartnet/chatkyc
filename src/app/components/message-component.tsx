"use client";
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
export default function MessageComponent({ string = "", delay = 1, mainDelay = 0.5 }){

    return (
        <AnimatePresence>
            <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: mainDelay }}>
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ delay: delay }}>
                    <div className="container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ delay: delay, y: {duration: 0.5} }}>
                        <div className='px-5 flex flex-row mb-8'>
                            <div className='flex-none w-50 mr-3'>
                                <Image 
                                    src="/profile/profile.png" 
                                    alt={''}
                                    width="100"
                                    height="100"
                                    className='rounded-full'/>
                            </div>
                            <div className='basis-auto'>
                                <p>{string}</p>
                            </div>
                        </div>
                    </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}