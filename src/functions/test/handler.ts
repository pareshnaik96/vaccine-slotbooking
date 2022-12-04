import express, { Request, Response } from "express";
import serverless from 'serverless-http';

const app = express()

app.get('/test', function (_req: Request, res: Response) {
  console.log('hiiiiiiiii')
  res.send('Hello World!')
})

export const main = serverless(app);
