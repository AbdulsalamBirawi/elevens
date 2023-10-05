import React from 'react'

const Select = () => {
  return (
    <div className="relative w-full lg:max-w-[180px]">
        <select id="countries" className=" border-b w-full border-gray-300 text-gray-900 text-sm outline-none py-2  block  ">
          <option selected>Any</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <label htmlFor="">Any</label>
    </div>
  )
}

export default Select