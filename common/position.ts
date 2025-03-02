export type Placement = "top" | "bottom" | "left" | "right";

export function calculatePosition(
  triggerElement: HTMLElement,
  popoverElement: HTMLElement,
  scrollX: number = globalThis.scrollX,
  scrollY: number = globalThis.scrollY
): { placement: Placement; position: { top: number; left: number } } {
  const defaultResult = {
    placement: "bottom" as Placement,
    position: { top: 0, left: 0 },
  };

  let triggerRect: DOMRect | undefined;
  let popoverRect: DOMRect | undefined;

  if (triggerElement) {
    triggerRect = triggerElement.getBoundingClientRect();
  }

  if (popoverElement) {
    popoverRect = popoverElement.getBoundingClientRect();
  }

  // Return early if either element is not available
  if (!triggerRect || !popoverRect) {
    return defaultResult;
  }

  const spaceAbove = triggerRect.top;
  const spaceBelow = globalThis.innerHeight - triggerRect.bottom;
  const spaceLeft = triggerRect.left;
  const spaceRight = globalThis.innerWidth - triggerRect.right;

  const viewportHeightThreshold = globalThis.innerHeight * 0.4;
  const viewportWidthThreshold = globalThis.innerWidth * 0.4;

  let placement: Placement = "bottom";
  let top = 0;
  let left = 0;

  // Determine placement based on available space
  if (
    spaceAbove >= viewportHeightThreshold &&
    spaceAbove >= popoverRect.height
  ) {
    placement = "top";
    top = triggerRect.top + scrollY - popoverRect.height;
    left =
      triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
  } else if (
    spaceBelow >= viewportHeightThreshold &&
    spaceBelow >= popoverRect.height
  ) {
    placement = "bottom";
    top = triggerRect.bottom + scrollY;
    left =
      triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
  } else if (
    spaceRight >= viewportWidthThreshold &&
    spaceRight >= popoverRect.width
  ) {
    placement = "right";
    top =
      triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
    left = triggerRect.right + scrollX;
  } else if (
    spaceLeft >= viewportWidthThreshold &&
    spaceLeft >= popoverRect.width
  ) {
    placement = "left";
    top =
      triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
    left = triggerRect.left + scrollX - popoverRect.width;
  } else {
    top = triggerRect.bottom + scrollY;
    left =
      triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
  }

  // Adjust positioning to keep within viewport
  if (left < 0) {
    left = 0;
  } else if (left + popoverRect.width > globalThis.innerWidth) {
    left = globalThis.innerWidth - popoverRect.width;
  }

  if (top < 0) {
    top = 0;
  } else if (top + popoverRect.height > globalThis.innerHeight + scrollY) {
    top = globalThis.innerHeight + scrollY - popoverRect.height;
  }

  return { placement, position: { top, left } };
}

// Alias for backwards compatibility
export const calculate = calculatePosition;
