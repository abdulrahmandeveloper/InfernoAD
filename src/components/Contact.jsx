import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [erros, seterrors] = useState({});
  const [issending, setissending] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formdata.name) errors.name = "name is required!";
    if (!formdata.email) {
      errors.email = "email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      errors.email = "invalid email address!";
    }

    if (!formdata.message) errors.message = "message is required";

    return errors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationErros = validate();
    if (Object.keys(validationErros).length > 0) {
      seterrors(validationErros);
    } else {
      seterrors({});
      setissending(true);

      emailjs
        .send(
          "service_p70w4us",
          "template_26wyl46",
          formdata,
          "M7t0Et-B06ASGsOto"
        )
        .then((response) => {
          toast.success("Message sent successfully.");
          setformdata({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          toast.error("Failed to send message");
          console.error("EmailJS error:", error);
        })
        .finally(() => {
          setissending(false);
        });
    }
  };

  return (
    <section className="bg-stone-50 p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Lets connect together
      </h2>
      <form
        action=""
        onSubmit={handlesubmit}
        className="mx-auto mb-20 lg:max-w-3xl"
      >
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              name="name"
              type="text"
              id="name"
              value={formdata.name}
              placeholder="name"
              onChange={handlechange}
              className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {erros.name && (
              <p className="text-sm text-rose-800">{erros.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              name="email"
              type="email"
              id="email"
              value={formdata.email}
              placeholder="email"
              onChange={handlechange}
              className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {erros.email && (
              <p className="text-sm text-rose-800">{erros.email}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            rows={6}
            name="message"
            id="message"
            value={formdata.message}
            placeholder="Please enter your message here."
            onChange={handlechange}
            className="mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
          {erros.message && (
            <p className="text-sm text-rose-800">{erros.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`cursor-pointer mb-8 w-full rounded border bg-emerald-950 px-4 py-2 text-sm font-semibold text-orange-50 hover:bg-emerald-900 ${
            issending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={issending}
        >
          <div className="flex items-center justify-center gap-2">
            {issending ? "sending..." : "send"}
            <FiSend />
          </div>
        </button>
      </form>
    </section>
  );
};

export default Contact;
