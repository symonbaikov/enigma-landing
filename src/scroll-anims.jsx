import { useRef, useEffect, useState, isValidElement, cloneElement, Children } from 'react';

export const useReveal = (options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (options.once !== false) observer.unobserve(entry.target);
          } else if (options.once === false) {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: options.threshold || 0.05, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

export const Reveal = ({ children, as: Tag = 'div', variant = 'up', delay = 0, className = '', ...rest }) => {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-stagger={delay || undefined}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const RevealWords = ({ children, as: Tag = 'span', className = '' }) => {
  const ref = useReveal();
  const splitNode = (node) => {
    if (typeof node === 'string') {
      return node.split(/(\s+)/).map((w, i) =>
        w.trim() ? <span className="word" key={i}>{w}</span> : w
      );
    }
    if (isValidElement(node)) {
      if (typeof node.props.children === 'string') {
        return cloneElement(node, {
          children: node.props.children.split(/(\s+)/).map((w, i) =>
            w.trim() ? <span className="word" key={i}>{w}</span> : w
          )
        });
      }
      return node;
    }
    return node;
  };
  const processed = Children.map(children, splitNode);
  return (
    <Tag ref={ref} className={`reveal-words ${className}`}>
      {processed}
    </Tag>
  );
};

export const CountUp = ({ value, duration = 1800, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(value * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const display = Number.isInteger(value)
    ? Math.round(n).toLocaleString()
    : n.toFixed(1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

export const Parallax = ({ children, speed = 0.3, className = '' }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2 - vh / 2;
        const offset = -center * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <div ref={ref} className={className} data-parallax style={{willChange: 'transform'}}>
      {children}
    </div>
  );
};

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 100,
      background: 'rgba(107,63,255,0.08)',
      pointerEvents: 'none',
    }}>
      <div style={{
        height: '100%', width: `${progress}%`,
        background: 'linear-gradient(90deg, #6B3FFF 0%, #C9A8FF 50%, #6B3FFF 100%)',
        transition: 'width 0.1s ease',
        boxShadow: '0 0 12px rgba(107,63,255,0.6)',
      }}/>
    </div>
  );
};
