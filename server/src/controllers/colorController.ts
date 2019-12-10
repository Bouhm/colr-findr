import express from "express";

import Color from "../models/color";

export const getColors = (res: express.Request) => {
  Color.import().then((colors) => {
    return res.status(200).json({ colors });
  });
};
