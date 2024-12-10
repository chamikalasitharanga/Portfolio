import Link from "next/link";
import { Button } from "./ui/button";

/*components */
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <a href="/">
                    <h1 className="text-4xl font-semibold">
                        Chamika<span className="text-accent">.</span>
                    </h1>
                </a>


                {/*Desktop nav & hire me button*/}
                 <div className="hidden xl:flex item-center gap-8">
                    <Nav />
                    <a href="/contact">
                        <Button>Hire me</Button>
                    </a>
                 </div>

                {/*mobile nav */}
                <div className="xl:hidden">
                  <MobileNav />
                </div>
            
        </div>
    </header>
  );
};

export default header
