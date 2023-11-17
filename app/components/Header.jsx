"use client"
import { faEnvira } from "@fortawesome/free-brands-svg-icons"
import { faCartShopping, faHeart, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="flex flex-col">
        <div className="top-header bg-[#111111] text-white ">
          <div className="container px-4 gap-3 py-2 flex md:flex-row flex-col justify-between items-center">
            <div className="flex gap-2 flex-col md:flex-row justify-center items-center text-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Store Location: 4042 Russel Ports, Kautzermouth, CA 03094</p>
            </div>
            <div className="flex gap-2 flex-col md:flex-row justify-center items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>(213) 658-3916</p>
            </div>
          </div>
        </div>
        <div className="middle-header bg-white">
          <div className="container flex p-4 justify-between items-center">
            <Link className="flex gap-2 items-center font-bold text-xl md:text-3xl" href="/" >
              <FontAwesomeIcon icon={faEnvira} />
              <p>Shopily</p>
            </Link>
            <div className="flex gap-3 items-center">
              <Link href="/favorite">
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </Link>
              <div className="w-[2px] h-10 bg-black"></div>
              <div className="flex gap-4 items-center">
                <Link href="/cart" className="text-xl">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <div className="flex flex-col">
                  <p>Shopping cart:</p>
                  <p>$20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header bg-white">

          <div className="container px-4 pb-4">
            <nav className="">
              <ul className="flex gap-4 items-center  text-base md:text-lg ">
                <li>
                  <Link href="" className="duration-500 font-bold hover:text-maingreen">Home</Link>
                </li>
                <li>
                  <Link href="" className="duration-500 hover:text-maingreen font-bold">Shop</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}
