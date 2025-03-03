// NOTE(jimmylee)
// Vendored from
// https://github.com/JohannesKlauss/react-hotkeys-hook/blob/main/src/index.ts

import useHotkeys from "./use-hotkeys.ts";
import type { Options, Keys, HotkeyCallback } from "./types.ts";
import { HotkeysProvider, useHotkeysContext } from "./hotkeys-provider.tsx";
import { isHotkeyPressed } from "./is-hotkey-pressed.ts";
import useRecordHotkeys from "./use-record-hotkeys.ts";

export {
  useHotkeys,
  useRecordHotkeys,
  useHotkeysContext,
  isHotkeyPressed,
  HotkeysProvider,
  Options,
  Keys,
  HotkeyCallback,
};
