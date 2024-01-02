
import '../App.css'

const Count = ({ count,record }) => {
  return (
    <span className='score'>
        <div className='best_score'>Best score: <span>{record}</span></div>
        <div className='current_score'>Current score: <span>{count}</span></div>
    </span>
  )
}

export default Count