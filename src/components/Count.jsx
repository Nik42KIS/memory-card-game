
import '../App.css'

const Count = ({ count,record }) => {
  return (
    <div className='score'>
        <div className='best_score'>Best score: <span>{record}</span></div>
        <div className='current_score'>Current score: <span>{count}</span></div>
    </div>
  )
}

export default Count