import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendContactForm } from "@/utils/api";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  industry: "",
  website: "",
};

const Form = () => {
  const [state, setState] = useState(initState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) =>
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(JSON.stringify(state));
    try {
      await sendContactForm(state);
      toast("Your details was sent", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-row gap-x-10 justify-between items-center">
          <div className="basis-2/4">
            <label
              htmlFor="text"
              className="block mb-2 text-lg font-medium uppercase text-gray-950"
            >
              First name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="bg-white border border-gray-950 text-gray-900 text-lg block w-full p-5"
              placeholder="Your full name"
              required
              value={state.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="basis-2/4">
            <label
              htmlFor="text"
              className="block mb-2 text-lg font-medium uppercase text-gray-950"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="bg-white border border-gray-950 text-gray-900 text-lg block w-full p-5"
              placeholder="Your full name"
              required
              value={state.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium uppercase text-gray-950"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white border border-gray-950 text-gray-900 text-lg block w-full p-5"
            placeholder="Your phone no."
            required
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium uppercase text-gray-950"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phonenumber"
            className="bg-white border border-gray-950 text-gray-900 text-lg block w-full p-5"
            placeholder="Your phone no."
            required
            value={state.phonenumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium uppercase text-gray-950"
          >
            Industry
          </label>

          <select
            name="industry"
            id="industry"
            form="industry"
            className="bg-white border focus:rounded-none border-gray-950 text-gray-900 text-lg block w-full p-5"
            value={state.industry}
            onChange={handleChange}
          >
            <option value="winery">Winery</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="realestate">Real Estate</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-lg font-medium uppercase text-gray-950"
          >
            Website url
          </label>
          <input
            type="text"
            id="website"
            name="website"
            className="bg-white border border-gray-950 text-gray-900 text-lg block w-full p-5"
            placeholder="www.businessname.com"
            required
            value={state.website}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="border bg-lemon-green text-gray-950 py-5 px-10 text-lg font-medium w-1/2"
          disabled={!state.email || !state.firstname || !state.lastname}
        >
          SEND
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
