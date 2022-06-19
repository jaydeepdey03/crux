import validator from "../utils/validator";
import { exampleSchema } from "./exampleSchema";

export const getExampleDataValidation = (req, res, next) =>
  validator(exampleSchema.getExampleData, req.body, next);
