/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">حدث خطأ 😢</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        في مشكلة أثناء تحميل الصفحة. حاول تحديث الصفحة أو العودة لاحقًا.
                    </p>
                    <a
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        ارجع للصفحة الرئيسية
                    </a>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
