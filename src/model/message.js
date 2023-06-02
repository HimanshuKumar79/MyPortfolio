import * as Yup from "yup";

export const messageSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Required"),
  email: Yup.string().email().required("Required"),
  message: Yup.string().min(10).required(),
  subject: Yup.string().min(6).required(),
});
