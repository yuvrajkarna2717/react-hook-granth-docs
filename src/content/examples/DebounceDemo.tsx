import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { Clock, Search } from "lucide-react";

const DebounceDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(inputValue, delay);

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Search className="w-4 h-4 inline mr-2" />
            Type something:
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Start typing to see debounce in action..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            Delay (ms):
          </label>
          <select
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value={200}>200ms</option>
            <option value={500}>500ms</option>
            <option value={1000}>1000ms</option>
            <option value={2000}>2000ms</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Immediate Value</h4>
            <p className="text-gray-600 dark:text-gray-400 break-all">
              {inputValue || <em>Empty</em>}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Updates immediately as you type
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Debounced Value</h4>
            <p className="text-blue-700 dark:text-blue-300 break-all">
              {debouncedValue || <em>Empty</em>}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Updates after {delay}ms delay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebounceDemo;