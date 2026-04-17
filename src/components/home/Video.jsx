import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1776435862~exp=1776439462~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=24d6dd483abe77029709be141bae8f979ed1f9fd28feb0733fb4b23b4860d06d&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
