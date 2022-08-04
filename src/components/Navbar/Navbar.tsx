import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    href: '/',
    label: 'Buy',
  },
  {
    href: '/pool',
    label: 'Pool',
  },
  {
    href: '/mycovers',
    label: 'Covers',
  },
];

export default function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <div className="mx-auto flex h-min w-min items-center gap-0.5 rounded-full border border-zinc-600 bg-zinc-900 p-1 md:border-none">
      {links.map(({ href, label }) => (
        <Link key={label} href={href} passHref>
          <a
            className={`${
              router.pathname === href ? 'bg-zinc-800' : ''
            } flex h-min w-[5rem] select-none items-center justify-start rounded-full py-1`}
          >
            <span
              className={`${
                router.pathname === href ? 'text-zinc-200' : 'text-zinc-400 hover:text-zinc-300'
              } mx-auto text-center text-lg font-medium`}
            >
              {label}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
