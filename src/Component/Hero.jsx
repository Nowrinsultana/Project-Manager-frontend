const Hero = () => {
  let marks = 90

  return (
    <div>
      {marks > 80 ? <h1>Brillient result</h1> : <h1>Average result</h1>}
    </div>
  )
}

export default Hero
