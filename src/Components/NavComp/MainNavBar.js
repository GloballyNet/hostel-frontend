import { Link } from "react-router-dom"

export const MainNavBar = () => {
    return (
        <>
        <nav className="py-[1.5%] flex justify-between items-center">
            <div>
                <h2 className="text-white font-[600] text-2xl"><Link to={"/"}>HostelBooking</Link></h2>
            </div>
            <div className="flex items-center justify-center gap-[3%]">
                <Link to={"/help"} className="py-[10px] px-[15px] hover:bg-gray-50/10 rounded"><i class="bi bi-question-circle text-white text-xl"></i></Link>
                <Link className="bg-white w-[80px] rounded-[3px] text-sm text-blue-600 hover:bg-blue-50 font-[600] py-[3%] text-center" to="/register">Register</Link>
                <Link className="bg-white w-[70px] rounded-[3px] text-sm text-blue-600 hover:bg-blue-50 font-[600] py-[3%] text-center" to="/signup">Sign in</Link>
            </div>
        </nav>
        <div>
            <Link><i class="fa-solid fa-bed"></i>Stays</Link>
        </div>
        </>
    )
}
