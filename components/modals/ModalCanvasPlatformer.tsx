import * as React from "react";
import * as Utilities from "../../common/utilities.ts";
import clsx from "clsx";

import { useModals } from "../page/ModalContext.tsx";

import Button from "../Button.tsx";
import CanvasPlatformer from "../CanvasPlatformer.tsx";
import Card from "../Card.tsx";

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full",
};

export interface ModalCanvasPlatformerProps {
  buttonText?: string | any;
}

export function ModalCanvasPlatformer({
  buttonText,
}: ModalCanvasPlatformerProps) {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <Card title="ALERT">
        <CanvasPlatformer rows={12} />
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalCanvasPlatformer;
