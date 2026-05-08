import { useMemo } from 'react';

export const Starfield = ({ density = 80, twinkle = true, big = false }) => {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < density; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (big ? 2.5 : 1.6) + 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }
    return arr;
  }, [density, big]);

  return (
    <div className="starfield">
      {stars.map(s => (
        <span
          key={s.id}
          className={twinkle ? 'star twinkle' : 'star'}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <span key={`flare-${i}`} className="star-flare" style={{
          left: `${(i * 17 + 8) % 95}%`,
          top: `${(i * 23 + 12) % 80}%`,
          animationDelay: `${i * 0.7}s`,
        }}/>
      ))}
    </div>
  );
};

export const Aurora = ({ variant = 'default' }) => (
  <div className={`aurora aurora-${variant}`}>
    <div className="aurora-band band-1"/>
    <div className="aurora-band band-2"/>
    <div className="aurora-band band-3"/>
    <div className="aurora-haze"/>
  </div>
);

export const Nebula = () => (
  <div className="nebula">
    <div className="nebula-blob blob-1"/>
    <div className="nebula-blob blob-2"/>
    <div className="nebula-blob blob-3"/>
  </div>
);
