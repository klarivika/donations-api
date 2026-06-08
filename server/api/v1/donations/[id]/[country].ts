import {z} from 'zod'
import {DonationController} from '../../../../../1.api_our_programs/src'

const controller=new DonationController()
const query_schema=z.object({
    q_search: z.string().optional(),
    q_search_country: z.string().optional(),
  })



export default defineEventHandler(async(event) => {
  const q_params = await getValidatedQuery(event, (data)=>query_schema.parse(data))
  const id = getRouterParam(event, 'id')
  const country = getRouterParam(event, 'country')
  const data=controller.Show({country:country!,id:id!,status({ status_number }) {
      
  },q_params})

  return  data
})

