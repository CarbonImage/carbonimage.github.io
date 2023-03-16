import React, {useState} from 'react';
import clsx from 'clsx';

export default function More({text}): JSX.Element {
  const [more, setMore] = useState(false);
  if (!more) {
    text = text.substring(0, 300) + '...';
  }

  function handleClick() {
    setMore(!more);
    return true;
  }

  return (
    <div
      style={{color: 'var(--ifm-color-primary)', cursor: 'pointer'}}
      onClick={handleClick}>
      {text}
    </div>
  );
}
