import React from 'react'
import Rock from '../images/icon-rock.svg'
import Scissors from '../images/icon-scissors.svg'
import Paper from '../images/icon-paper.svg'
import store from '../store'

export default ({ fn }) => {
    const [i, setI] = React.useState(0);
    const [timer, setTimer] = React.useState(100)

    const arr = [Rock, Paper, Scissors];

    React.useEffect(() => {
        
        store.rndNum = (~~(Math.random() * 6) + 11)
    }, [])


    if (i <= store.rndNum) {
        setTimeout(() => {
            setI(i + 1)
            setTimer(timer * 1.1555)
        }, timer);
    }

    React.useEffect(() => {
        if ( i === 0 ) store.showRes = false
        
        if ((i -1) === store.rndNum) {
            store.showRes = true
            fn()
        }
    }, [i , fn])
    let choice = arr[(i -1) % arr.length]




    React.useEffect(() => {
        // console.log('set' , store.rndNum)

        switch (store.rndNum % 3) {
            case (0):
                console.log('Rock')
                store.houseChoice = 1
                break;
            case (1):
                console.log('Paper')
                store.houseChoice = 2
                break;
            case (2):
                console.log('Scissors')
                store.houseChoice = 3
                break;
            default:
                store.houseChoice = null
                break;
        }

    }, [store.rndNum])

    return (
        <img src={choice} alt='choice' />
    )
}

