import React from 'react';
import { motion } from "framer-motion"
import Triangle from './images/bg-triangle.svg'
import Rock from './images/icon-rock.svg'
import Scissors from './images/icon-scissors.svg'
import Paper from './images/icon-paper.svg'
import { batch } from '@risingstack/react-easy-state';
import store from './store'

export default ()=> {
    return(
        <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

        <motion.div onClick={()=>{batch(()=>{
            store.page = 2
            store.playersChoice = 1
        })}} className='Rock' whileHover={{
          scale: 1.3,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={Rock} alt='Rock' />
        </motion.div>
        <div className='Triangle' >
          <img src={Triangle} alt='triangle' />
        </div>
        <motion.div onClick={()=>{batch(()=>{
            store.page = 2
            store.playersChoice = 3
        })}} className='Scissors' whileHover={{
          scale: 1.3,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
          whileTap={{ scale: 0.9 }}>
          <img src={Scissors} alt='Scissors' />
        </motion.div>
        <motion.div onClick={()=>{batch(()=>{
            store.page = 2
            store.playersChoice = 2
        })}} className='Paper' whileHover={{
          scale: 1.3,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
          whileTap={{ scale: 0.9 }}>
          <img src={Paper} alt='Paper' />
        </motion.div>

      </motion.div>

    )
}
