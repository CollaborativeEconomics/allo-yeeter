'use client'
import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, disabled, onClick, ...props }: ButtonProps, ref) => (
    <button
      disabled={disabled}
      className={`flex flex-row justify-center my-4 px-6 py-2 rounded-lg uppercase ${className}`}
      {...{ onClick, ref }}
      {...props}
    >
      {props.children}
      {text}
    </button>
  ),
)

Button.displayName = 'Button'

export default Button
