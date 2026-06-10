import { d as defineEventHandler, a as getValidatedQuery, s as setResponseStatus } from '../../../_/nitro.mjs';
import { z } from 'zod';
import { D as DonationController } from '../../../_/donation.controller.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@upstash/redis';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const controller = new DonationController();
const query_schema = z.object({
  q_search: z.string().optional(),
  q_search_country: z.string().optional()
});
const index = defineEventHandler(async (event) => {
  const q_params = await getValidatedQuery(event, (data2) => query_schema.parse(data2));
  fetch("http://127.0.0.1:7636/ingest/be015f30-2ac1-457d-bd90-7ba136109a18", { method: "POST", headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "09ae77" }, body: JSON.stringify({ sessionId: "09ae77", location: "donations/index.ts:handler", message: "donations handler reached", data: { q_params }, timestamp: Date.now(), hypothesisId: "D", runId: "pre-fix" }) }).catch(() => {
  });
  const data = controller.Index({
    status({ status_number }) {
      setResponseStatus(event, Number(status_number));
    },
    q_params
  });
  return data;
});

export { index as default };
//# sourceMappingURL=index.mjs.map
