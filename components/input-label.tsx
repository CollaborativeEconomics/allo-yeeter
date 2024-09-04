//import React, { forwardRef, HTMLProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputLabelProps extends InputProps {
  label?: string
  className?: string
  register?: UseFormRegisterReturn
  onChange?: (event: any) => void
  renderRight?: React.ReactNode
}

const InputLabel = React.forwardRef<HTMLInputElement, InputLabelProps>(
  (
    {
      label,
      register,
      className,
      onChange,
      renderRight = null,
      ...props
    },
    ref
  ) => {
    return (
      <label className={`my-4 ${className ?? ''}`}>
        <span className="text-slate-300 text-sm uppercase text-left">
          {label}
        </span>
        <div
          className="relative w-full overflow-hidden"
        >
          <input
            onKeyUp={onChange}
            className="w-full text-black border rounded px-4 py-2"
            ref={ref}
            {...props}
            {...register}
          />
          {renderRight && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-2 bg-blue-700">
              {renderRight}
            </div>
          )}
        </div>
      </label>
    )
  }
)

InputLabel.displayName = 'InputLabel'

export default InputLabel
