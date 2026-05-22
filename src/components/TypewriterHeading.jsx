import { useEffect, useState } from 'react';

const lines = ['Our Luxury', 'Gem Collections'];

const TYPE_SPEED = 85;
const DELETE_SPEED = 45;
const LINE_PAUSE = 420;
const END_PAUSE = 2400;
const RESTART_PAUSE = 700;

function TypingCursor({ visible }) {
  return (
    <svg
      className="ml-1.5 inline-block h-[0.88em] w-[5px] shrink-0 align-baseline md:w-[6px]"
      viewBox="0 0 6 64"
      aria-hidden="true"
    >
      <rect
        x="0"
        y="0"
        width="6"
        height="64"
        rx="1.5"
        className={`fill-mocha transition-opacity duration-75 ${
          visible ? 'opacity-95' : 'opacity-0'
        }`}
      />
    </svg>
  );
}

export default function TypewriterHeading({ className = '' }) {
  const [displayed, setDisplayed] = useState(() => lines.map(() => ''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState('typing');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 520);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (phase === 'pause-end') {
      const timer = setTimeout(() => setPhase('deleting'), END_PAUSE);
      return () => clearTimeout(timer);
    }

    if (phase === 'pause-start') {
      const timer = setTimeout(() => {
        setPhase('typing');
        setLineIndex(0);
        setCharIndex(0);
        setDisplayed(lines.map(() => ''));
      }, RESTART_PAUSE);
      return () => clearTimeout(timer);
    }

    const currentLine = lines[lineIndex];

    if (phase === 'typing') {
      if (charIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayed((prev) => {
            const next = [...prev];
            next[lineIndex] = currentLine.slice(0, charIndex + 1);
            return next;
          });
          setCharIndex((c) => c + 1);
        }, TYPE_SPEED);
        return () => clearTimeout(timer);
      }

      if (lineIndex < lines.length - 1) {
        const timer = setTimeout(() => {
          setLineIndex((i) => i + 1);
          setCharIndex(0);
        }, LINE_PAUSE);
        return () => clearTimeout(timer);
      }

      setPhase('pause-end');
      return;
    }

    if (phase === 'deleting') {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayed((prev) => {
            const next = [...prev];
            next[lineIndex] = currentLine.slice(0, charIndex - 1);
            return next;
          });
          setCharIndex((c) => c - 1);
        }, DELETE_SPEED);
        return () => clearTimeout(timer);
      }

      if (lineIndex > 0) {
        const timer = setTimeout(() => {
          const prev = lineIndex - 1;
          setLineIndex(prev);
          setCharIndex(lines[prev].length);
        }, LINE_PAUSE / 2);
        return () => clearTimeout(timer);
      }

      setPhase('pause-start');
    }
  }, [phase, lineIndex, charIndex]);

  const showCursorOnLine = (index) => index === lineIndex;

  return (
    <h1
      className={`font-serif text-[clamp(1.75rem,8vw,2.5rem)] font-medium leading-tight text-mocha sm:text-4xl md:text-5xl lg:text-6xl ${className}`}
    >
      {lines.map((line, index) => (
        <span key={line} className="relative block min-h-[1.12em]">
          <span className="invisible select-none" aria-hidden="true">
            {line}
          </span>
          <span className="absolute left-0 top-0 whitespace-pre">
            {displayed[index]}
            {showCursorOnLine(index) && (
              <TypingCursor visible={cursorVisible} />
            )}
          </span>
        </span>
      ))}
    </h1>
  );
}
