import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLead } from "../shared/utils/api";

export default function AddLead() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    agency: "",
    type: "",
    email: "",
    website: "",
    linkedin: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    await createLead(form);

    nav("/leads");
  }

  return (
    <div className="p-6 flex justify-center">
      {/* Card */}
      <div
        className="
          w-full
        
          bg-white
          border border-gray-100
          rounded-2xl
          shadow-sm
          p-6
        "
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add New Lead</h2>

          <p className="text-sm text-gray-500 mt-1">
            Enter lead details to track outreach and follow-ups.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Agency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Agency Name
            </label>

            <input
              name="agency"
              placeholder="Enter agency name"
              onChange={handleChange}
              required
              className="
                w-full
                px-3 py-2
                border border-gray-200
                rounded-xl
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Type + Email Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Type
              </label>

              <select
                name="type"
                onChange={handleChange}
                required
                className="
                  w-full
                  px-3 py-2
                  border border-gray-200
                  rounded-xl
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              >
                <option value="">Select type</option>

                <option value="CEO">CEO</option>

                <option value="Founder">Founder</option>

                <option value="Owner">Owner</option>

                <option value="Manager">Manager</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
                required
                className="
                  w-full
                  px-3 py-2
                  border border-gray-200
                  rounded-xl
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>

            <input
              name="website"
              placeholder="https://example.com"
              onChange={handleChange}
              className="
                w-full
                px-3 py-2
                border border-gray-200
                rounded-xl
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile
            </label>

            <input
              name="linkedin"
              placeholder="https://linkedin.com/in/..."
              onChange={handleChange}
              className="
                w-full
                px-3 py-2
                border border-gray-200
                rounded-xl
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            {/* Cancel */}
            <button
              type="button"
              onClick={() => nav("/leads")}
              className="
                px-4 py-2
                text-sm
                rounded-xl
                border border-gray-200
                hover:bg-gray-50
              "
            >
              Cancel
            </button>

            {/* Save */}
            <button
              type="submit"
              className="
                px-5 py-2
                text-sm
                rounded-xl
                bg-indigo-600
                text-white
                hover:bg-indigo-700
                shadow-sm
              "
            >
              Save Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
