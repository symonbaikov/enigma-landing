import { useState } from 'react';
import WaitlistModal from './WaitlistModal.jsx';
import { track, EVENTS } from '../lib/analytics.js';

/**
 * Every CTA that used to lead to the platform routes through here while the
 * product is pre-launch.
 *
 * One component rather than a patch per call site: the platform is not public
 * yet, so sign-up, checkout and "run an audit" are all dead ends, and each one
 * left unhandled is a visitor lost without a trace. `source` keeps them apart in
 * the reports, which is the only way to learn which promise people respond to.
 */
export default function WaitlistCta({
  source,
  plan,
  children,
  className = 'btn btn-cobalt',
  onClick,
  ...props
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    onClick?.(event);
    // Recorded before the modal opens, so the click counts on its own.
    track(EVENTS.ctaClicked, { source, plan });
    setOpen(true);
  };

  return (
    <>
      <button type="button" className={className} onClick={handleClick} {...props}>
        {children}
      </button>
      <WaitlistModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
        plan={plan}
      />
    </>
  );
}
