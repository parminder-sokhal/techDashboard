import React, { useEffect } from "react";
import "flowbite";
import "flowbite/dist/flowbite.min.css";

function Datepicker({ onChange }) {
  useEffect(() => {
    const startDateInput = document.getElementById("datepicker-range-start");
    const endDateInput = document.getElementById("datepicker-range-end");

    if (startDateInput && endDateInput) {
      const datepickerStart = new window.Datepicker(startDateInput, {
        autohide: true,
        range: true,
        locale: "en",
        onChange: (startDate, endDate) => {
          if (onChange) {
            onChange(startDate, endDate);
          }
        },
      });

      const datepickerEnd = new window.Datepicker(endDateInput, {
        autohide: true,
        range: true,
        locale: "en",
      });
    }
  }, [onChange]);

  return (
    <div id="date-range-picker" date-rangepicker className="flex items-center">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          id="datepicker-range-start"
          name="start"
          type="text"
          className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Select date start"
        />
      </div>
      <span className="mx-4 text-gray-500">to</span>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          id="datepicker-range-end"
          name="end"
          type="text"
          className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Select date end"
        />
      </div>
    </div>
  );
}

export default Datepicker;
