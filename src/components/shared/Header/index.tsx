import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import Logo from '~/assets/svgs/Logo';

export default function Header() {
  return (
    <header className="flex h-24 w-full">
      <div className="flex w-full items-center gap-10 p-5">
        <div className="h-16 w-[200px] -rotate-6">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <form className="flex h-full w-2/5 items-center justify-between gap-5 overflow-hidden rounded-full border-2 border-transparent bg-gray-200 focus-within:border-[#faebf9] focus-within:bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="h-1/2 w-full flex-1 bg-gray-200 p-8 focus:bg-transparent focus:outline-none"
          />
          <button className="m-2 flex size-10 items-center justify-center rounded-full bg-[#ea4c89] text-2xl text-white hover:bg-[#ec5e95]">
            <IoSearchOutline />
          </button>
        </form>
        <nav className="flex h-full flex-1 items-center justify-between gap-5 px-10 text-lg font-normal">
          <div className="flex h-full items-center gap-10">
            <Link href={'/'}>Home</Link>
            <Link href={'/About'}>Blog</Link>
            <Link href={'/Contact'}>Contact</Link>
          </div>
          <div className="flex h-full items-center gap-10">
            <Link href={'/'}>Home</Link>
            <Link
              href={'/about'}
              className="flex h-full items-center rounded-full bg-black px-5 py-2 text-white hover:bg-gray-600"
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
