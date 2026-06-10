import { d as defineEventHandler, a as getValidatedQuery, b as getRouterParam, s as setResponseStatus } from '../../../../../_/nitro.mjs';
import { z } from 'zod';
import { D as DonationController } from '../../../../../_/donation.controller.mjs';
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
const _country_ = defineEventHandler(async (event) => {
  const q_params = await getValidatedQuery(event, (data2) => query_schema.parse(data2));
  const id = getRouterParam(event, "id");
  const country = getRouterParam(event, "country");
  const data = controller.Show({
    country,
    id,
    status({ status_number }) {
      setResponseStatus(event, Number(status_number));
    },
    q_params
  });
  return data;
});

export { _country_ as default };
//# sourceMappingURL=_country_.mjs.map
