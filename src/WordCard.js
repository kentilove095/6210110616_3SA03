import React, { useState } from 'react';
import _, { attempt, times } from 'lodash';
import CharacterCard from './CharacterCard';




const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    let times = 0
    return{
        times,
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated`)
        let guess = state.guess + c
        setState({...state, guess})            
          
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed : true})
                state.times ++;
                console.log(`number of attempt = ${state.times}`)
                
            }else{
                console.log('reset, next attempt')
                state.times ++;
                setState({...state, guess: '',attempt: state.attempt + 1})
                console.log(`number of attempt = ${state.times}`)
                
                
                if(state.times >= 3){
                    console.log(state.word[0])
                }
                if(state.times >= 4){
                    console.log(state.word[1])
                }
                if(state.times >= 5){
                    console.log(state.word[2])
                }
                if(state.times >= 6){
                    console.log(state.word[3])
                }
                if(state.times >= 7){
                    console.log(state.word[4])
                }
                if(state.times >= 8){
                    console.log(state.word[5])
                }
                if(state.times >= 9){
                    console.log(state.word[6])
                }
                if(state.times >= 10){
                    console.log(state.word[7])
                }
                if(state.times >= 11){
                    console.log(state.word[8])
                }
            }
            
        }

    }

 return (
 <div>
    { 
          state.chars.map((c, i) =>
         <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
         )
    }
 </div>
 );
}