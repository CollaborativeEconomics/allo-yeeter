import React, { HTMLAttributes } from 'react'
import Image from "next/image"
import Link from "next/link"


interface ButtonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, className, ...props }: ButtonLinkProps, ref) => (
    <Link
      className={`min-w-[200px] mx-auto my-4 px-6 py-2 rounded-lg uppercase flex flex-row justify-center bg-blue-700 ${className}`}
      href={href}
      {...props}
    >
      {props.children}
    </Link>
  ),
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
