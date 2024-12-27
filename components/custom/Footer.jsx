import Logo from "./Logo"
import Paths from "./Paths"

const Footer = () => {
  return (
    <footer className='flex flex-col items-center lg:flex-row  py-32 mx-auto md:max-w-[1200px] '>
        <div className="pb-6">
              <Logo />
        </div>
        <Paths/>
    </footer>
  )
}

export default Footer