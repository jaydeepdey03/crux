import createHttpError from "http-errors";
import Example from "../model/User";

export const getExample = (req, res, next) => {
  res.json({ message: "hello" });
};
export const getExampleData = async (req, res, next) => {
  const { name, id } = req.body;

  try {
    const example = await Example.findOne({ name });

    if (example) return next(createHttpError(406, "example already exists"));

    const newExample = new Example({ name, id });

    await newExample.save();

    res.json({ name, id });
  } catch (error) {
    return next(createHttpError.InternalServerError);
  }
};
