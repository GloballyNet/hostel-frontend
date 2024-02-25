import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="bg-blue-800">
      <nav className="pr-[10%] pl-[5%] py-[1.5%] flex justify-between items-center">
        <h2 className="text-white font-[600] text-2xl"><Link to={"/"}>HostelBooking</Link></h2>
        <Link to={"/help"} className="py-[10px] px-[15px] hover:bg-gray-50/10 rounded"><i className="bi bi-question-circle-fill text-white text-xl"></i></Link>
      </nav>
    </div>
  )
}
