import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import * as animationData from '../../assets/error-page/404-page.json'
const ERR_404 = () => {
  const routerHome = () => {

  }

  const clickHere = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  return (
    <div className="err-404">
      <Player
        autoplay
        loop
        src={animationData as unknown as string}
        style={{ "height": '400px', "max-width": '800px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>

    // <Result
    //   status="404"
    //   title="404"
    //   subTitle="Sorry, the page you visited does not exist."
    //   extra={
    //     <Button type="primary">
    //       <Link to="/">Back Home</Link>
    //     </Button>
    //   }
    // />
  )
}

export default ERR_404