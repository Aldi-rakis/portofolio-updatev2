const AbstractLineBackground = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, backgroundColor: '#fff' }}>
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>
        </defs>

        {[...Array(30)].map((_, i) => (
          <path
            key={i}
            d={`
              M0 ${50 + i * 20}
              C 400 ${100 + i * 10}, 800 ${0 + i * 30}, 1440 ${50 + i * 20}
            `}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
};

export default AbstractLineBackground;
