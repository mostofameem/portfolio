/** A blinking phosphor block cursor. */
export const Cursor = ({ className = "" }: { className?: string }) => (
  <span className={`cursor ${className}`.trim()} aria-hidden="true" />
);
