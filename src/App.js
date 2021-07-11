import './App.css'
import WordCard from './WordCard';

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  
  function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }
  return sortString(result)
}



const Str = getRandomString(5)
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
