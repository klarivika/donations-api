import { Router, Request, Response } from 'express';
import { DonationController } from '../modules';
import { Universal_api_util } from '../utils';



const donation_controller=new DonationController()
const donation_router = Router();
donation_router.get('/', (req: Request, res: Response) => {
    const q_params=Universal_api_util.get_queries_params({query:req.query})
    let response_status:number=200
   const datas=donation_controller.Index({status({status_number}){
           if(typeof status_number === 'number')response_status=status_number
    },q_params})
  res.status(response_status).json(datas);
});
donation_router.get('/:id/:country', (req: Request, res: Response) => {
  const q_params=Universal_api_util.get_queries_params({query:req.query})
  let response_status:number=200
  const {id,country}=req.params
  const data_param:Record<string,string>={
    id:Array.isArray(id)?id[0]:String(id),
    country:Array.isArray(country)?country[0]:String(country),
  }
  const datas=donation_controller.Show({country:data_param.country,id:data_param.id,status({status_number}){
           if(typeof status_number === 'number')response_status=status_number
    },q_params})
  res.status(response_status).json(datas);
});

export default donation_router;