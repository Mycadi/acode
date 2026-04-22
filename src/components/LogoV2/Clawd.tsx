import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box } from '../../ink.js';

export type ClawdPose = 'default' | 'arms-up' | 'look-left' | 'look-right';

type Props = {
  pose?: ClawdPose;
};

export function Clawd(t0) {
  const $ = _c(1);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <Box />;
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  return t1;
}
