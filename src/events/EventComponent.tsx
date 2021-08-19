const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <div>
      <input onChange={onChange} />
    </div>
  )
}

export default EventComponent
