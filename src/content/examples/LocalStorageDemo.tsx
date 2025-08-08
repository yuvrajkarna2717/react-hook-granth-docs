import { Database, Trash2 } from "lucide-react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useState, ChangeEvent, KeyboardEvent } from "react";

// Define types for stored values
interface Preferences {
  theme: string;
  notifications: boolean;
  language: string;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const LocalStorageDemo = () => {
  const [name, setName] = useLocalStorage<string>("demo-name", "");
  const [age, setAge] = useLocalStorage<number>("demo-age", 0);
  const [preferences, setPreferences] = useLocalStorage<Preferences>(
    "demo-preferences",
    {
      theme: "light",
      notifications: true,
      language: "en",
    }
  );
  const [todos, setTodos] = useLocalStorage<Todo[]>("demo-todos", []);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllData = () => {
    setName("");
    setAge(0);
    setPreferences({ theme: "light", notifications: true, language: "en" });
    setTodos([]);
  };

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="space-y-6">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <Database className="w-4 h-4 inline mr-2" />
            All data is automatically saved to localStorage. Try refreshing the
            page!
          </p>
          <button
            onClick={clearAllData}
            className="flex items-center space-x-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors mx-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All Data</span>
          </button>
        </div>

        {/* Basic String Storage */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            String Storage
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Age:
              </label>
              <input
                type="number"
                value={age}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAge(Number(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Object Storage */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Object Storage
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Theme:
              </label>
              <select
                value={preferences.theme}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setPreferences({ ...preferences, theme: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.notifications}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPreferences({
                      ...preferences,
                      notifications: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Enable Notifications
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Array Storage */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Array Storage (Todo List)
          </h4>
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewTodo(e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  e.key === "Enter" && addTodo()
                }
                placeholder="Add a new todo"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button
                onClick={addTodo}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Add
              </button>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-600 rounded"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {todos.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  No todos yet. Add one above!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Current Values Display */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Current localStorage Values
          </h4>
          <pre className="text-xs text-blue-800 dark:text-blue-200 overflow-x-auto">
            {JSON.stringify({ name, age, preferences, todos }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LocalStorageDemo;
