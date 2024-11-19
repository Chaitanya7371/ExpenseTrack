import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense, deleteExpense } from '../redux/tracker/actions'; 

function Card({ item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: item.category,
        moneySpent: item.moneySpent,
        remarks: item.remarks,
        date: item.date,
    });

    const dispatch = useDispatch();

    function deleteYourExpense(id) {
        console.log(id);
        dispatch(deleteExpense(id));
    }

    function editYourExpense() {
        console.log("edit");
        setIsModalOpen(!isModalOpen);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function saveEditedExpense() {
        console.log("Saving edited expense:", formData); 
        dispatch(deleteExpense(item.id))
        dispatch(addExpense(formData)); 
        setIsModalOpen(false); 
    }

    return (
        <div className="w-[250px] h-[300px]  rounded-md p-4">
            <div>
                <p className="text-white">Category: {item.category}</p>
                <p className="text-white">Total Money Spent: {item.moneySpent}</p>
                <p className="text-white">Remarks: {item.remarks}</p>
                <p className="text-white">Date: {item.date}</p>
                <button 
                    type="button" 
                    className=" text-white px-4 py-2 rounded-md mt-2"
                    onClick={() => deleteYourExpense(item.id)}
                >
                    Delete
                </button>
                <button 
                    type="button" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
                    onClick={editYourExpense}
                >
                    Edit Expense
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Edit Expense</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input 
                                    type="text" 
                                    name="category" 
                                    value={formData.category} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Money Spent</label>
                                <input 
                                    type="number" 
                                    name="moneySpent" 
                                    value={formData.moneySpent} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Remarks</label>
                                <input 
                                    type="text" 
                                    name="remarks" 
                                    value={formData.remarks} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    value={formData.date} 
                                    onChange={handleInputChange} 
                                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                />
                            </div>
                        </form>
                        <div className="flex justify-end">
                            <button 
                                type="button" 
                                onClick={saveEditedExpense} 
                                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Save
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setIsModalOpen(false)} 
                                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;