import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function CustomLink({ href, title, className = '', onClick }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={onClick}
    >
      {title}

      <span
        className={`h-[1px] bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
