import { useFormik } from "formik";
import React, { useRef } from "react";
// import { BiSend } from "react-icons/bi";
import { messageSchema } from "../model/message";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactMe = ({ contactme }) => {
  const form = useRef();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: messageSchema,
      onSubmit: (value, { resetForm }) => {
        emailjs
          .sendForm(
            "service_lsshbd5",
            "template_7fjdijb",
            form.current,
            "dtntVXM0--JUsopkM"
          )
          .then(
            (result) => {
              console.log(result.text);
              resetForm({ values: "" });
              toast.success("Mail sent successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
      },
    });
  return (
    <div
      ref={contactme}
      className="h-fit pt-[6rem]  max-w-[1080px] mx-auto md:px-0 px-6 "
    >
      <div className="w-fit h-fit mx-auto items-center justify-center flex flex-col mb-9">
        <div className="text-[1.9rem] font-semibold">ContactMe</div>
        <div className="text-[1rem] text-[#d2c6c6] text-center sm:text-start">
          Want to connect? My inbox is always open!
        </div>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-7"
      >
        <div className="flex lg:gap-3 gap-5 lg:flex-row flex-col md:w-fit w-full">
          <div className="flex flex-col">
            <div className="flex flex-col bg-[#ede7e7] border-solid border-2 border-[#6e57e0] lg:h-[4rem] h-[5rem] md:w-[44.8rem] lg:w-[21.9rem] w-full rounded-xl px-3 py-2">
              <label htmlFor="name" className="text-[13px] text-[#908c8c]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-none outline-none bg-[#ede7e7]"
              />
            </div>
            {errors.name && touched.name ? (
              <p className="text-red-600">{errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col bg-[#ede7e7] border-solid border-2 border-[#6e57e0] lg:h-[4rem] h-[5rem] md:w-[44.8rem] lg:w-[21.9rem] w-full rounded-xl px-3 py-2">
              <label htmlFor="email" className="text-[13px] text-[#908c8c]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-none outline-none bg-[#ede7e7]"
              />
            </div>
            {errors.email && touched.email ? (
              <p className="text-red-600">{errors.email}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col md:w-fit w-full">
          <div className="flex flex-col bg-[#ede7e7] border-solid border-2 border-[#6e57e0] h-[5rem] md:w-[44.8rem] w-full rounded-xl px-3 py-2">
            <label htmlFor="subject" className="text-[13px] text-[#908c8c]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-none outline-none bg-[#ede7e7]"
            />
          </div>
          {errors.subject && touched.subject ? (
            <p className="text-red-600">{errors.subject}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col md:w-fit w-full">
          <div className="flex flex-col bg-[#ede7e7] border-solid border-2 border-[#6e57e0] md:w-[44.8rem] w-full rounded-xl px-3 py-2">
            <label htmlFor="message" className="text-[13px] text-[#908c8c]">
              Message
            </label>
            <textarea
              rows={7}
              cols={50}
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-none outline-none bg-[#ede7e7]"
            />
          </div>
          {errors.message && touched.message ? (
            <p className="text-red-600">{errors.message}</p>
          ) : (
            ""
          )}
        </div>
        <input
          type="submit"
          value="Send Message"
          className="bg-[#6e57e0] px-8 py-3 hover:bg-[#8c79ec] transition-colors duration-300 rounded-xl text-white"
        ></input>
      </form>
    </div>
  );
};

export default ContactMe;
