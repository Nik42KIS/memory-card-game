
import '../App.css'

const Count = ({ count }) => {
  return (
    <div className='score'>
        <div className='best_score'>Best score: <span></span></div>
        <div className='current_score'>Current score: <span>{count}</span></div>
    </div>
  )
}

export default Count