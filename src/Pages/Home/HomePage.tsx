import { MainNavBar, CheckOut } from "../../Components"

export const HomePage = () => {
  return (
    <main>
      <div className="bg-blue-800">
        <section className="max-w-[1080px] mx-auto">
          <MainNavBar/>
          <CheckOut/>
        </section>
      </div>
    </main>
  )
}
