import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { motion, AnimatePresence } from "framer-motion"
import './App.css';
import Triangle from './images/bg-triangle.svg'
import Rock from './images/icon-rock.svg'
import Scissors from './images/icon-scissors.svg'
import Paper from './images/icon-paper.svg'
import Logo from './images/logo.svg'
import Page1 from './page1'
import Page2 from './page2'
import store from './store'



function App() {
  // console.log(store.playersChoice , '' , store.page)
  console.log('showRes' , store.showRes  , store.rndNum)
  return (
    <>
      <div className="All">
        <div className="up" >
          <div className="Header">
            <div className="Logo"><img src={Logo} alt='Logo' /></div>
            <div className="Score"><span><p>Score</p> <h1>{store.score}</h1></span></div>
          </div>
        </div>
        <AnimatePresence>

          {store.page === 1 && (
            <Page1 key='page1' />

          )}
          {store.page === 2 && (
            <Page2 key='page2' />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default view(App) ;
