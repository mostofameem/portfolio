import { useEffect, useRef, useState } from "react";
import { TypewriterBlock } from "./TypewriterBlock";

const BOOT_LINES = [
  "PortfolioOS BIOS v1.42                  (C) 1996-2026 Phosphor Systems",
  "",
  "Initializing Portfolio OS ...",
  "Loading user profile ........ [ OK ]",
  "Loading projects (5) ........ [ OK ]",
  "Loading skills (5) .......... [ OK ]",
  "Mounting /home/mostofa ...... [ OK ]",
  "Starting retro-sh ........... [ OK ]",
  "Calibrating CRT phosphor .... [ OK ]",
  "Establishing uplink ......... [ OK ]",
  "",
  "System Ready.",
];

interface Props {
  onComplete: () => void;
}

/**
 * Full-screen fake boot sequence. Types out, then auto-dismisses. Click or
 * press any key to skip.
 */
export const BootSequence = ({ onComplete }: Props) => {
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onComplete();
  };

  // After the text finishes typing, hold briefly then dismiss.
  const handleTyped = () => {
    setDone(true);
    window.setTimeout(finish, 650);
  };

  useEffect(() => {
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="boot-sequence boot-flash" role="dialog" aria-label="Boot sequence">
      <TypewriterBlock
        lines={BOOT_LINES}
        speed={5}
        charsPerTick={3}
        onDone={handleTyped}
      />
      <div className="boot-skip term-dim">
        {done ? "" : "(press any key to skip)"}
      </div>
    </div>
  );
};
