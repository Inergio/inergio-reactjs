import React from 'react';
import { Icon } from './icons/Icon';
import { Logo } from './icons/Logo';

function LoaderPage() {
  return (
    <div className="loader-page">
      <Icon iconSvg={<Logo />} />
    </div>
  )
}

export { LoaderPage }