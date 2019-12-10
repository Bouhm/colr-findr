import express from 'express';

import Color from '../models/color';

export const getColors = (res: express.Response) => {
  Color.find().then((colors: any[]) => {
    return res.status(200).json({ colors });
  });
};
