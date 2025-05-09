import React, { useState, useEffect, useRef } from "react";
export default function Addproduct({ passDate, editItem }) {
    let [form, setForm] = useState({
        name: "",
        price: ""
    })
    let dsprice = useRef(null)
    let dssubmit = useRef(null)

    useEffect(() => {
        if (editItem) {
            setForm({ name: editItem.name, price: editItem.price });
        }
    }, [editItem])
    ///setdata
    function handleChange(e) {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    ///submit
    function handlerSubmit(e) {
        e.preventDefault()
        if (editItem) {
            passDate({ id: editItem.id, name: form.name, price: form.price });
            setForm({ name: "", price: "" });

        } else {
            passDate({ id: Math.random(), name: form.name, price: form.price });
            setForm({ name: "", price: "" });
        }
    }
    function handlerMove(e, nextRef) {
        e.preventDefault()
        nextRef.current.focus();
    }

    return (<>
     <h2 className="text-2xl font-semibold text-center text-purple-600 mt-10">
  {editItem ? "Update Product" : "Add Product"}
</h2>

<div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
  <form onSubmit={handlerSubmit} className="space-y-5">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Product Name</label>
      <input
        type="text"
        name="name"
        value={form?.name}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handlerMove(e, dsprice)}
        placeholder="Enter product name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Price</label>
      <input
        type="number"
        name="price"
        ref={dsprice}
        value={form?.price}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handlerMove(e, dssubmit)}
        placeholder="Enter product price"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>

    <button
      ref={dssubmit}
      type="submit"
      className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
    >
      {editItem ? "Update" : "Add"}
    </button>
  </form>
</div>

    </>)
}