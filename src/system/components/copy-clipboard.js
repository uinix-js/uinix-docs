import React, {useEffect, useState} from 'react';
import {Element} from 'uinix-ui';

const CopyClipboard = ({text}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <Element variant="button.small" onClick={handleCopy}>
      {isCopied ? 'Copied!' : 'Copy'}
    </Element>
  );
};

export default CopyClipboard;
