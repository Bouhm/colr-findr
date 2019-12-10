import express from 'express';

import Color from '../models/color';

export const getColors = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  Color.find().then((colors: any[]) => {
    return res.status(200).json({ colors });
  });
};
