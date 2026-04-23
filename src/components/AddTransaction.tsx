export default function AddTransaction() {
  return (
    <main className="w-full max-w-lg mx-auto min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="p-8 pb-6 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            New Transaction
          </h1>
          <p className="text-sm text-gray-500">
            Enter details to track your spending or income.
          </p>
        </div>

        {/* Form */}
        <form
          className="p-8 pt-6 space-y-8"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          {/* Type Toggle */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-500">
              Transaction Type
            </label>

            <div className="flex p-1 bg-gray-100 rounded-lg border border-gray-200">
              <button
                type="button"
                className="flex-1 py-2 px-4 rounded-md bg-white text-blue-600 shadow-sm font-medium flex items-center justify-center gap-2"
              >
                <span>⬇</span>
                Expense
              </button>

              <button
                type="button"
                className="flex-1 py-2 px-4 rounded-md text-gray-500 hover:text-gray-900 font-medium flex items-center justify-center gap-2"
              >
                <span>⬆</span>
                Income
              </button>
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-500">
              Amount
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <span className="text-xl font-bold text-gray-700">$</span>
              </div>

              <input
                type="number"
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-4 bg-gray-100 rounded-lg text-2xl font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-500">
              Category
            </label>

            <div className="relative">
              <select className="w-full py-3 px-4 bg-gray-100 rounded-lg appearance-none text-gray-700 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select a category</option>
                <option value="food">Food & Dining</option>
                <option value="salary">Salary</option>
                <option value="transport">Transportation</option>
                <option value="shopping">Shopping</option>
              </select>

              <div className="absolute right-3 top-3 text-gray-400">▼</div>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-500">
              Date
            </label>

            <input
              type="date"
              defaultValue="2023-10-27"
              className="w-full py-3 px-4 bg-gray-100 rounded-lg text-gray-700 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </main>
  );
}
