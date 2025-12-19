import { useState } from 'react';

export default function App() {
const [desc, setDesc] = useState('')
const [amount, setAmount] = useState('')
const [category, setCategory] = useState('Food')
const [filter, setFilter] = useState('All')
const [expenses, setExpenses] = useState([])

const deleteEntry =(id) => setExpenses(expenses.filter(expense => expense.id !== id));
  
const addExpense = ()=>{
           if (desc.trim() && amount) {
                setExpenses([...expenses, {
                desc, 
                amount: parseFloat(amount),
                category, 
                id: Date.now()
            }]);
      setDesc("");
      setAmount("");
    }
}

const filtered = filter === 'All' 
    ? expenses 
    : expenses.filter(exp => exp.category === filter);

const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
 
  return (
    <div className="min-h-screen shadow-black bg-gradient-to-b from-gray-800 to-purple-600 p-8">
      <div className="w-full px-2 md:max-w-4xl md:mx-auto">
        <h1 className="text-3xl py-2 md:text-5xl md:py-8 font-sans mb-4 text-center rounded-lg shadow-md font-bold text-purple-400">
          Expense Tracker
        </h1>
        
        
          <div className='w-full p-4 md:mx-auto md:max-w-4xl md:p-8 md:text-xl text-white rounded-lg font-sans bg-gradient-to-br from-gray-900 to-gray-600'>
            <label htmlFor="description"><strong>Description : </strong>
            <input required
                   className='w-full rounded-lg p-2 m-2 border-none font-sans text-black' 
                   onChange={(e) => setDesc(e.target.value)} 
                   type="text" 
                   id="description" 
                   value={desc} 
                   placeholder='Enter...'/>
            </label>

            <div className='flex justify-between items-end'>
            <div>
            <label htmlFor="amount"><strong>Amount : </strong>
            <input required
            className='rounded-lg p-2 mx-2 border-none font-sans max-w-20 md:max-w-40 text-black' 
            onChange={(e) => setAmount(e.target.value)} 
            type="number" 
            step="0.01" 
            id="amount" 
            value={amount}
            placeholder='0.00'
            />
            </label>

            <select 
  className='p-2 focus:outline-none max-w-20 md:max-w-40 md:mx-4 rounded-md border-none bg-gray-600 text-white font-sans' 
  onChange={(e) => setCategory(e.target.value)} 
  name="expenseType" 
  id="expenseType"
  value={category}
>
  <option value="Food">Food</option>
  <option value="Transport">Transport</option>
  <option value="Fun">Fun</option>
 
</select>
            </div>

          </div>
          <button 
                onClick = {addExpense} 
                className=' text-white 
                text-center font-semibold p-2 mt-4 rounded-lg m-auto transition-all duration-200 active:scale-105 bg-green-500 active:bg-green-600'>
                  Add Expense
          </button>
          </div>

    
        
       <div className="mx-auto my-4 flex gap-2 p-2 justify-center">
          <button 
            onClick={() => setFilter("All")} 
            className={`${filter === 'All' ? 'bg-gray-500 text-black' : 'bg-gray-400 text-gray-900'} md:px-6 md:font-bold shadow-lg px-4 py-2 font-semibold font-sans rounded-full hover:scale-105 transition-all`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("Food")} 
            className={`${filter === 'Food' ? 'bg-gray-500 text-black' : 'bg-gray-400 text-gray-900'} md:px-6 md:font-bold shadow-lg px-4 py-2 font-semibold font-sans rounded-full hover:scale-105 transition-all`}
          >
            Food
          </button>
          <button 
            onClick={() => setFilter("Transport")} 
            className={`${filter === 'Transport' ? 'bg-gray-500 text-black' : 'bg-gray-400 text-gray-900'} md:px-6 md:font-bold shadow-lg px-4 py-2 font-semibold font-sans rounded-full hover:scale-105 transition-all`}
          >
            Transport
          </button>
          <button 
            onClick={() => setFilter("Fun")} 
            className={`${filter === 'Fun' ? 'bg-gray-500 text-black' : 'bg-gray-400 text-gray-900'} md:px-6 md:font-bold shadow-lg px-4 py-2 font-semibold font-sans rounded-full hover:scale-105 transition-all`}
          >
            Fun
          </button>
        </div>
        
        <div className='w-full p-4 md:mx-auto md:max-w-4xl md:p-6 bg-gradient-to-br from-gray-900 to-gray-600 text-white rounded-xl font-sans'>
            <h2 className="text-xl md:text-3xl font-bold mb-4">Expenses</h2>
            {filtered.length === 0? (
              <p className="text-gray-400 text-center py-6 md:text-2xl">
              {filter === 'All' ? 'No expenses yet' : `No ${filter} expenses`}
            </p>
          ):(
              <ul className="space-y-2 [&_li]:bg-gradient-to-tr from-gray-500 to-gray-700 text-black">
                {filtered.map(entry => (
                  <li key={entry.id}
                    className="flex items-center justify-between gap-3 p-2 md:px-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >

                    <div className="flex-1">
                    <p className="font-bold text-lg md:text-xl">{entry.desc}</p>
                    <p className="text-sm text-gray-300 md:text-lg">{entry.category}</p>
                   </div>

                   <div className="flex items-center gap-2 md:gap-5">
                    <span className="text-xl font-sans font-semibold text-green-400 md:text-2xl">
                      Rs {parseFloat(entry.amount).toFixed(2)}
                    </span>
                    <button 
                      className="bg-gray-800 rounded w-8 h-8 text-white active:bg-gray-600 transition-all 0.3s font-bold" 
                      onClick={() => deleteEntry(entry.id)}
                    >
                      ✕
                    </button>
                  </div>
                  </li>))}
                  </ul>
          )}
        </div>

      <div className="w-full p-4 md:max-w-4xl md:mx-auto md:p-8 mt-4 bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-xl font-sans">
          <div className="flex justify-end gap-4 items-center">
            <span className="text-xl font-semibold md:text-2xl md:font-bold">Total Spent :</span>
            <span className="text-xl font-semibold text-green-500 md:text-2xl md:font-bold">Rs {total.toFixed(2)}</span>
          </div>
        </div> 
      </div>
    </div>
  );
}
