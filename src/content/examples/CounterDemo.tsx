import { Hash, Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterDemo = () => {
  const { count, increment, decrement, reset, set } = useCounter(0);
  const [inputValue, setInputValue] = useState('');
  
  const handleSetValue = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      set(num);
      setInputValue('');
    }
  };

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {count}
        </div>
        <p className="text-gray-600 dark:text-gray-400">Current Count</p>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <button
          onClick={increment}
          className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Increment</span>
        </button>
        
        <button
          onClick={decrement}
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <Minus className="w-4 h-4" />
          <span>Decrement</span>
        </button>
        
        <button
          onClick={reset}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-2 justify-center">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Set value"
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-24 text-center"
        />
        <button
          onClick={handleSetValue}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <Hash className="w-4 h-4" />
          <span>Set</span>
        </button>
      </div>
    </div>
  );
};

export default CounterDemo;