// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {addDataToDB, getAllDataFromDB} from '../../lib/fbHelper';

export default async function handler(req, res) {
    if(req.method === "POST") {
      await addDataToDB(req.body, "unicorns");
      res.end()
    }
    else if(req.method === "GET") {
      const data = await getAllDataFromDB("unicorns");
      res.status(200).json(data);
    }
    else {
      res.status(404);
    }
}


