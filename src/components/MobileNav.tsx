'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer print:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="https://www.floridacapitalbank.com/wp-content/uploads/2019/08/logo_flcb_main.png"
              width={150}
              height={150}
              alt="Horizon logo"
              className=" print:hidden"
            />
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link href={item.route} key={item.label}
                        className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                        <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}

                <Footer />
              </nav>
            </SheetClose>


          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav