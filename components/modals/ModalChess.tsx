import * as React from "react";
import clsx from "clsx";
import * as Utilities from "../../common/utilities.ts";

import { useHotkeys } from "../../modules/hotkeys/index.ts";
import { useModals } from "../page/ModalContext.tsx";

import Button from "../Button.tsx";
import CardDouble from "../CardDouble.tsx";
import Chessboard from "../Chessboard.tsx";

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full",
};

export interface ModalChessProps {
  buttonText?: string | any;
  board: string[][];
  title?: string;
}

export function ModalChess({ board, buttonText, title }: ModalChessProps) {
  const { close } = useModals();

  useHotkeys("enter", () => close());

  return (
    <div className={clsx(styles.root)}>
      <CardDouble title={title} style={{ textAlign: "center" }}>
        <Chessboard board={board} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "CLOSE" : buttonText}
        </Button>
      </CardDouble>
    </div>
  );
}

export default ModalChess;
