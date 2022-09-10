import Moment from 'moment'
import {BsCalendarDate} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
function App() {

  const formatDate = Moment().format('DD-MM-YY')
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ':' + date.getSeconds() 



  return (
    <>
    <h1 className='welcome'>Welcome
    </h1>
    <div className='date_div'>
      
    <div className='icon'> <BsCalendarDate /></div>
    <div className='date'><h2>{formatDate}</h2> </div>
    <div className='icon'> <BiTime /></div>
     <div className='time'><h2> {showTime}</h2></div> 
      
        </div>
    </>
  );

  }
export default App;
