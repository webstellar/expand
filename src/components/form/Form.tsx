import React from "react";
import { classNames } from "@/utils/classNames";

const Form = () => {
  const handleSubmit = (): void => {};

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
          />
        </div>

        <button
          type="submit"
          className="border bg-lemon-green text-gray-950 py-5 px-10 text-lg font-medium w-1/2"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Form;
