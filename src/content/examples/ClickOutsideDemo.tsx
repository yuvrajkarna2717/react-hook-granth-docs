import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Menu, MousePointer, X } from "lucide-react";

const ClickOutsideDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Explicitly tell TS what element type the ref will point to
  const modalRef = useClickOutside<HTMLDivElement>(() => {
    setIsModalOpen(false);
    setClickCount((prev) => prev + 1);
  });

  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
    setClickCount((prev) => prev + 1);
  });

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <MousePointer className="w-4 h-4 inline mr-2" />
            Click outside elements to close them. Outside clicks detected:{" "}
            <strong>{clickCount}</strong>
          </p>
        </div>

        {/* Dropdown Example */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <Menu className="w-4 h-4" />
            <span>Toggle Dropdown</span>
          </button>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10"
            >
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dropdown Menu
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Example */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            Open Modal
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              ref={modalRef}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Modal Title
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This modal will close when you click outside of it. Try clicking
                on the dark overlay!
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClickOutsideDemo;