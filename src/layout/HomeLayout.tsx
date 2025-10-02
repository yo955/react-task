import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import ErrorBoundary from "../components/common/ErrorBoundary"

const HomeLayout = () => {
    return (
        <ErrorBoundary>
            <Header />
            <Outlet />
            <Footer />
        </ErrorBoundary>
    )
}

export default HomeLayout