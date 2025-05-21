import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
            <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image 
        className="h-8 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
        width={100}
        height={50}
        />
      </Link>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <Link href="https://owyni.github.io/" className="text-sm/6 font-semibold text-gray    -900">Portfolio</Link>
      <Link href="/about" className="text-sm/6 font-semibold text-gray-900">About</Link>
      <Link href="/contact" className="text-sm/6 font-semibold text-gray-900">Contact</Link>
    </div>
  </nav>
</header>
    );
}