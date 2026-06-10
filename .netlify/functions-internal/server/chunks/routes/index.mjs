import { d as defineEventHandler } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@upstash/redis';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const index = defineEventHandler((event) => {
  return {
    message: "Halo! Ini data dari API Nuxt kamu.",
    status: 200
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
