import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OBJECTS = [
  {
    id: 'laptop',
    content: (
      <div className="scene-obj scene-obj--laptop">
        <div className="laptop-screen">
          <div className="laptop-screen__inner">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`code-line code-line--${i}`} />
            ))}
          </div>
        </div>
        <div className="laptop-base" />
      </div>
    ),
    x: 58,
    y: -12,
    z: 0,
    rotate: -6,
    floatDelay: 0,
    blur: 0,
  },
  {
    id: 'artboard',
    content: (
      <div className="scene-obj scene-obj--artboard">
        <div className="artboard-header" />
        <div className="artboard-hero" />
        <div className="artboard-lines">
          <div /><div /><div />
        </div>
        <div className="artboard-btn" />
      </div>
    ),
    x: 78,
    y: 8,
    z: -60,
    rotate: 8,
    floatDelay: 0.4,
    blur: 1.5,
  },
  {
    id: 'sticky-1',
    content: (
      <div className="scene-obj scene-obj--sticky scene-obj--sticky-yellow">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="sticky-line" />
        ))}
      </div>
    ),
    x: 42,
    y: 32,
    z: -100,
    rotate: -12,
    floatDelay: 0.8,
    blur: 2.5,
  },
  {
    id: 'sticky-2',
    content: (
      <div className="scene-obj scene-obj--sticky scene-obj--sticky-pink">
        {[1, 2, 3].map((i) => (
          <div key={i} className="sticky-line" />
        ))}
      </div>
    ),
    x: 88,
    y: -20,
    z: -40,
    rotate: 10,
    floatDelay: 1.2,
    blur: 1,
  },
  {
    id: 'brackets',
    content: (
      <div className="scene-obj scene-obj--brackets">
        {'</>'}
      </div>
    ),
    x: 50,
    y: 55,
    z: -130,
    rotate: 5,
    floatDelay: 0.6,
    blur: 3.5,
  },
  {
    id: 'pen',
    content: (
      <div className="scene-obj scene-obj--pen">
        <div className="pen-body" />
        <div className="pen-tip" />
        <div className="pen-clip" />
      </div>
    ),
    x: 72,
    y: 40,
    z: -15,
    rotate: 35,
    floatDelay: 1.0,
    blur: 0,
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    setMobile(
      window.innerWidth < 768 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);
  return mobile;
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const objectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const ctx = gsap.context(() => {
      objectRefs.current.forEach((el, i) => {
        if (!el) return;
        const obj = OBJECTS[i];

        gsap.to(el, {
          y: '+=18',
          rotation: `+=${obj.rotate > 0 ? 3 : -3}`,
          duration: 3 + Math.random() * 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: obj.floatDelay,
        });
      });

      const hero = document.getElementById('hero');
      if (hero) {
        gsap.to(containerRef.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'center center',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;

      objectRefs.current.forEach((el, i) => {
        if (!el) return;
        const depth = 1 - (Math.abs(OBJECTS[i].z) / 150);
        const parallaxX = cx * 20 * depth;
        const parallaxY = cy * 12 * depth;
        gsap.to(el, {
          x: OBJECTS[i].x + '%',
          marginLeft: parallaxX,
          marginTop: parallaxY,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="hero-scene" ref={containerRef}>
      <div className="hero-scene__perspective">
        {OBJECTS.map((obj, i) => (
          <div
            key={obj.id}
            ref={(el) => { objectRefs.current[i] = el; }}
            className={`hero-scene__item hero-scene__item--${obj.id}`}
            style={{
              left: `${obj.x}%`,
              top: `${50 + obj.y}%`,
              transform: `translateZ(${obj.z}px) rotate(${obj.rotate}deg)`,
              filter: obj.blur > 0 ? `blur(${obj.blur}px)` : undefined,
            }}
          >
            {obj.content}
          </div>
        ))}
      </div>
    </div>
  );
}
