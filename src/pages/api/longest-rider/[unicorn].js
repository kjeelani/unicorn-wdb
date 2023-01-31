// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getLongestRiderFromDB} from '../../../lib/fbHelper';

export default async function handler(req, res) {
    const {unicorn} = req.query;
    
    if(req.method === "GET") {
      const data = await getLongestRiderFromDB("rides", unicorn);
      res.status(200).json(data);
    }
    else {
      res.status(404);
    }
}


