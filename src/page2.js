import React from 'react';
import { motion } from "framer-motion"
import Rock from './images/icon-rock.svg'
import Scissors from './images/icon-scissors.svg'
import Paper from './images/icon-paper.svg'
import Change from './component/change'
import store from './store'

export default () => {

  const arr = [Rock, Paper, Scissors];
  const [results, setResults] = React.useState('')

    

  function cb() {
    console.log(store.playersChoice , store.houseChoice)
    if (store.playersChoice === store.houseChoice) {
      setResults('DRAW')
    } else if (store.playersChoice === 2 && store.houseChoice === 1) {
      setResults('YOU WIN')
      store.score = store.score + 1
    } else if (store.playersChoice === 1 && store.houseChoice === 2) {
      setResults('YOU LOSE')
      store.score = store.score - 1
    } else if (store.playersChoice === 2 && store.houseChoice === 1) {
      setResults('YOU WIN')
      store.score = store.score + 1
    } else if (store.playersChoice === 2 && store.houseChoice === 3) {
      setResults('YOU LOSE')
      store.score = store.score - 1
    } else if (store.playersChoice === 3 && store.houseChoice === 1) {
      setResults('YOU LOSE')
      store.score = store.score - 1
    } else if (store.playersChoice === 3 && store.houseChoice === 2) {
      setResults('YOU WIN')
      store.score = store.score + 1
    } else if (store.playersChoice === 1 && store.houseChoice === 3) {
      setResults('YOU WIN')
      store.score = store.score + 1
    } else {
      console.log('IF IS NOT RUNNING')
    }

  }

  const resCal = React.useCallback(cb, [store.playersChoice])
  

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShowButton(true)
  //     if (store.houseChoice === 'Rock') {
  //       setResults('YOU WIN')
  //     } else {
  //       setResults('YOU LOSE')
  //     }
  //   }, store.changingTimer);
  // } , [])


  // console.log( store.houseChoice)

  return (
    <motion.div key='1' className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div key='2' className="picked" initial={{ scale: 1.9 }}>
        <img src={arr[store.playersChoice - 1]} alt='Choice' />
      </motion.div>
      <div className="status">
        <motion.div key='3' className="winloss" initial={{ scale: 1.5 }} animate={{ scale: 0.9, opacity: 0.3 }} transition={{ yoyo: Infinity, duration: 1.1, ease: "easeInOut" }}>
          {/* {results && <p>{results}</p>} */}
          {store.showRes === true && <p>{results}</p>}
        </motion.div>
        {store.showRes === true &&
          <motion.div key='4' className="playagain"  >
            <button onClick={() => store.page = 1} >PLAY AGAIN</button>
          </motion.div>}

      </div>
      <motion.div key='5' className="house" initial={{ scale: 1.9 }}>
        <Change fn = {resCal} />

      </motion.div>
    </motion.div>
  )
}