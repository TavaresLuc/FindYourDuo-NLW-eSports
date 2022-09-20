import { InputHTMLAttributes } from 'react'

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
    return (
        <button
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:texti-zinc500
                   " />
    )
}