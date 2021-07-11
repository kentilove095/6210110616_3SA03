import './App.css'
import WordCard from './WordCard';


function getRandomString() {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for ( var i = 0; i < 18; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  
  function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }
  return sortString(result)
}



const Str = getRandomString()
const word = Str
function App() {
  
  return (
    <div>
      {
          <WordCard value={word}/>
      }   
    </div>
  );
}

export default App;
