import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, period }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setDelta(period);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200 - Math.random() * 100);
      } else {
        setDelta(isDeleting ? delta / 2 : delta);
      }
    };

    const ticker = setTimeout(() => {
      handleType();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, texts, period]);

  return (
    <p className="typewrite">
      <span className="wrap">{text}</span>
    </p>
  );
};

export default Typewriter;