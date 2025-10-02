import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! الصفحة غير موجودة</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
                ارجع للصفحة الرئيسية
            </Link>
        </div>
    );
};

export default NotFound;
