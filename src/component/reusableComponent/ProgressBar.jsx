import React from 'react'

function ProgressBar(props) {
  const {bgcolor,completed,sec,length} = props;
  //const [completed, setCompleted] = useState(0);

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out'
  }


  return (
    <div className='progress-bar-container'>
      <div className='progress-filler' style={fillerStyles}>
        <span className='progress-label'>{`${length}`}{sec ? 's' : '%'}</span>
      </div>
    </div>
  )
}

export default ProgressBar