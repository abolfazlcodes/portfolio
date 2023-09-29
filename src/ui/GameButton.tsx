function GameButton({
  position,
  direction,
}: {
  position: string;
  direction: string;
}) {
  return (
    <button
      className={`w-18 inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-[#010c15] text-[#fff] ${position}`}
    >
      {direction === 'up' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='51'
          height='30'
          viewBox='0 0 51 30'
          fill='none'
        >
          <rect
            x='1.46094'
            y='1.46356'
            width='48.0787'
            height='27.6912'
            rx='7.5'
            fill='#010C15'
            stroke='#1E2D3D'
          />
          <path
            d='M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z'
            fill='white'
          />
        </svg>
      )}

      {direction === 'left' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='30'
          viewBox='0 0 50 30'
          fill='none'
        >
          <rect
            x='49.0786'
            y='28.6547'
            width='48.0787'
            height='27.6912'
            rx='7.5'
            transform='rotate(-180 49.0786 28.6547)'
            fill='#010C15'
            stroke='#1E2D3D'
          />
          <path
            d='M22.0391 14.8091L28.0391 10.5591L28.0391 19.0592L22.0391 14.8091Z'
            fill='white'
          />
        </svg>
      )}

      {direction === 'down' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='51'
          height='30'
          viewBox='0 0 51 30'
          fill='none'
        >
          <rect
            x='49.5391'
            y='28.6547'
            width='48.0787'
            height='27.6912'
            rx='7.5'
            transform='rotate(-180 49.5391 28.6547)'
            fill='#010C15'
            stroke='#1E2D3D'
          />
          <path
            d='M25.5 17.8091L21.25 11.8091L29.75 11.8091L25.5 17.8091Z'
            fill='white'
          />
        </svg>
      )}

      {direction === 'right' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='30'
          viewBox='0 0 50 30'
          fill='none'
        >
          <rect
            x='49'
            y='28.6547'
            width='48.0787'
            height='27.6912'
            rx='7.5'
            transform='rotate(-180 49 28.6547)'
            fill='#010C15'
            stroke='#1E2D3D'
          />
          <path
            d='M27.9604 14.8091L21.9604 19.0592L21.9604 10.5591L27.9604 14.8091Z'
            fill='white'
          />
        </svg>
      )}
    </button>
  );
}

export default GameButton;
