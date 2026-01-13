'use client';

import { useEffect, useRef } from 'react';
import Artplayer from 'artplayer';

export const Player = ({ option, getInstance, className, style }) => {
  const artRef = useRef(null);

  useEffect(() => {
    if (artRef.current) {
        const art = new Artplayer({
            ...option,
            container: artRef.current,
        });

        if (getInstance && typeof getInstance === 'function') {
            getInstance(art);
        }

        return () => {
            if (art && art.destroy) {
                art.destroy(false);
            }
        };
    }
  }, [option, getInstance]);

  return <div ref={artRef} className={className} style={style}></div>;
};
