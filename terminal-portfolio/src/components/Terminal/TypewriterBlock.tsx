import { useTypewriter } from "../../hooks/useTypewriter";

interface Props {
  /** Each string is one line; newlines inside a string are respected too. */
  lines: string[];
  speed?: number;
  charsPerTick?: number;
  onDone?: () => void;
  className?: string;
}

/**
 * Types out an array of lines sequentially using a single typewriter pass over
 * the joined text — newlines emerge in order, giving the boot/banner feel.
 */
export const TypewriterBlock = ({
  lines,
  speed = 10,
  charsPerTick = 2,
  onDone,
  className = "",
}: Props) => {
  const text = lines.join("\n");
  const shown = useTypewriter(text, { speed, charsPerTick, onDone });
  const typing = shown.length < text.length;

  return (
    <span className={`pre ${className}`.trim()}>
      {shown}
      {typing ? <span className="cursor" /> : null}
    </span>
  );
};
