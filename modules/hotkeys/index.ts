// NOTE(jimmylee)
// Vendored from
// https://github.com/JohannesKlauss/react-hotkeys-hook/blob/main/src/index.ts

import useHotkeys from "@modules/hotkeys/use-hotkeys.ts";
import type { Options, Keys, HotkeyCallback } from "@modules/hotkeys/types.ts";
import {
  HotkeysProvider,
  useHotkeysContext,
} from "@modules/hotkeys/hotkeys-provider.tsx";
import { isHotkeyPressed } from "@modules/hotkeys/is-hotkey-pressed.ts";
import useRecordHotkeys from "@modules/hotkeys/use-record-hotkeys.ts";

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
