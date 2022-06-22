import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

function About() {
  const isAmp = useAmp()

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        <h3>Amp content</h3>
      ) : (
        <div>Default content</div>
      )}
    </div>
  )
}

export default About