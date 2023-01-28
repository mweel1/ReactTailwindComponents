import React, { useCallback, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export default function SearchBar({ debounced }) {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (v) => {
    if (debounced) debounced(v);
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div className="w-full rounded-lg">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative text-gray-400 focus-within:text-gray-600">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search"
          className="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
          placeholder="Search"
          type="search"
          name="search"
          onChange={(e) => optimizedFn(e.target.value)}
        />
      </div>
    </div>
  );
}
