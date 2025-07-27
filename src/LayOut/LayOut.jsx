import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LayOut() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-[rgba(211,248,255,0.82)]">
            <Header />
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LayOut;