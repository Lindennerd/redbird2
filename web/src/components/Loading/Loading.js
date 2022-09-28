import ReactLoading from 'react-loading'

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <ReactLoading
        type="bubbles"
        color="#EF3109"
        height={'10%'}
        width={'10%'}
      />
    </div>
  )
}

export default LoadingComponent
