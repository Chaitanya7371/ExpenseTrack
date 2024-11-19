import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addExpense } from "../redux/tracker/actions";
import { v4 as uuidv4 } from "uuid";

function AddExpense() {
  const dispatch = useDispatch();
  const allExpense = useSelector((state) => state.tracker.expenses);

  const formik = useFormik({
    initialValues: {
      date: "",
      category: "",
      moneySpent: "",
      remarks: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      category: Yup.string().required("Category is required"),
      moneySpent: Yup.number()
        .required("Money spent is required")
        .positive("Amount must be positive"),
      remarks: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const expense = {
        id: uuidv4(),
        ...values,
      };

      dispatch(addExpense(expense));
      console.log(expense);
      resetForm();
    },
  });

  console.log(allExpense, ">>");

  return (
    <div className="w-[100%] h-[100vh]  flex">
      <div className="w-[30%] h-[60vh] mx-auto mt-8 flex flex-col p-6 shadow-md">
        <h1 className="text-xl font-bold text-center mb-6">Add Your Expense</h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
            {formik.errors.date && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block mb-1 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="entertainment">Entertainment</option>
              <option value="others">Others</option>
            </select>
            {formik.errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="moneySpent" className="block mb-1 font-medium">
              Amount
            </label>
            <input
              id="moneySpent"
              name="moneySpent"
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.moneySpent}
            />
            {formik.errors.moneySpent && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.moneySpent}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="remarks" className="block mb-1 font-medium">
              Remarks (optional)
            </label>
            <input
              id="remarks"
              name="remarks"
              type="text"
              placeholder="Add remarks"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.remarks}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
