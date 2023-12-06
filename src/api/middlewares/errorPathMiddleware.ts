import { Request, Response } from 'express';


const invalidPathHandler = (req: Request, res: Response, next: any) => {
  res.status(404).send('Invalid path');
};

export default invalidPathHandler;
