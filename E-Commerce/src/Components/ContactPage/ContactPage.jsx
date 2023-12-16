import React, { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const notify = () =>
  toast("Your Email has been sent", {
    icon: "✔️",
  });

const error = () => toast.error("You need to login");

export const ContactUs = () => {
  const form = useRef();
  const { isAuthenticated } = useAuth0();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      emailjs
        .sendForm(
          "service_mvaotlp",
          "template_rn5geku",
          form.current,
          "eeJQ3FiKh1J3XTRNJ"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.error(error.text);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          ref={form}
          onSubmit={formik.handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full md:w-96"
        >
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h1>
          <label className="text-lg font-semibold mb-2 text-gray-800">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            onChange={formik.handleChange}
            value={formik.values.user_name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-4"
          />
          {formik.errors.user_name && (
            <div className="text-red-500">{formik.errors.user_name}</div>
          )}

          <label className="text-lg font-semibold mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            onChange={formik.handleChange}
            value={formik.values.user_email}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-4"
          />
          {formik.errors.user_email && (
            <div className="text-red-500">{formik.errors.user_email}</div>
          )}

          <label className="text-lg font-semibold mb-2 text-gray-800">
            Message
          </label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 h-32 mb-4"
          />
          {formik.errors.message && (
            <div className="text-red-500">{formik.errors.message}</div>
          )}

          <Toaster position="top-center" reverseOrder={false} />

          {isAuthenticated ? (
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Send
            </button>
          ) : (
            <button
              onClick={error}
              className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Send
            </button>
          )}
        </form>
      </div>
    </motion.div>
  );
};
