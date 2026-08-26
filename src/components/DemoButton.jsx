import WaitlistCta from './WaitlistCta.jsx';

/**
 * "Book a demo" while the product is pre-launch.
 *
 * This used to call the platform's demo endpoint. That endpoint is not public
 * yet, so every press ended in an alert box. Rather than patch the six pages
 * that render this button, the behaviour changes in the one place they all go
 * through: the press is recorded and the waitlist is offered instead.
 *
 * `src/lib/demo.js` still holds the real launch flow — restore the call here
 * when the platform goes live.
 */
export default function DemoButton({ children, source = 'demo', loadingLabel, ...props }) {
  return (
    <WaitlistCta source={source} {...props}>
      {children}
    </WaitlistCta>
  );
}
