import Button from "./ui/Button";

function DeleteArticle({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>
            <div className="bg-indigo-800 p-6 rounded-xl shadow-2xl z-10 max-w-md w-full transform transition-all duration-300 scale-100 opacity-100 animate-fade-in relative">
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 bg-transparent hover:bg-transparent border-none shadow-none"
                    text="✕"
                />

                <div className="flex justify-center mb-4">
                    <svg
                        className="w-12 h-12 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v4m0 4h.01m-6.93 2h13.86c.62 0 1.14-.49 1.2-1.11l1.04-12a1.25 1.25 0 00-1.24-1.39H4.97c-.62 0-1.14.49-1.2 1.11l-1.04 12a1.25 1.25 0 001.24 1.39z"
                        ></path>
                    </svg>
                </div>

                <h2 className="text-xl font-bold text-white text-center">
                    Confirm Deletion
                </h2>
                <p className="text-gray-300 text-center mt-2">
                    Are you sure you want to delete this blog article?
                </p>
                <p className="text-red-400 text-sm text-center mt-2">
                    This action cannot be undone.
                </p>

                <div className="mt-6 flex w-full items-center justify-between gap-4">
                    <Button
                        onClick={onClose}
                        text="Cancel"
                        className="w-1/2 btn btn-neutral py-2 rounded-lg hover:bg-gray-500 transition"
                    />
                    <Button
                        onClick={onConfirm}
                        text="Delete"
                        className="w-1/2 btn btn-error font-bold py-2 rounded-lg transition"
                    />
                </div>
            </div>
        </div>
    );
}

export default DeleteArticle;
