import * as React from "react";
import clsx from "clsx";

import * as Utilities from "@common/utilities.ts";
import { useModals } from "@components/page/ModalContext.tsx";
import Button from "@components/Button.tsx";
import Card from "@components/Card.tsx";

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full",
};

export interface ModalAlertProps {
  buttonText?: string | any;
  message: string;
}

export function ModalAlert({ message, buttonText }: ModalAlertProps) {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <Card title="ALERT">
        {message}
        <br />
        <br />
        <Button onClick={() => close()}>
          {Utilities.isEmpty(buttonText) ? "Close" : buttonText}
        </Button>
      </Card>
    </div>
  );
}

export default ModalAlert;
