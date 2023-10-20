import { ComponentProps, ReactNode } from "react"


interface Props extends ComponentProps<"table"> {
  children: ReactNode
}

function Table({ children }: Props) {
  
  return (
    <table className="w-full border-collapse">
      {children}
    </table>
  )
}

interface THeadProps extends ComponentProps<"thead"> {
  children: ReactNode
}
function THead({ children}: THeadProps) {
  return (
    <thead>
      {children}
    </thead>
  )
}
interface TBodyProps extends ComponentProps<"tbody"> {
  children: ReactNode
}
function TBody({ children}: TBodyProps) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}
interface TRowProps extends ComponentProps<"tr"> {
  children: ReactNode
}
function TRow({ children}: TRowProps) {
  return (
    <tr className="whitespace-nowrap border-y border-border">
      {children}
    </tr>
  )
}

interface THeadingProps extends ComponentProps<"th"> {
  children: ReactNode
}
function THeading({ className = '', children, ...props}: THeadingProps) {
  return (
    <th className={`text-xxs text-muted font-medium text-start ${className}`} {...props}>
      {children}
    </th>
  )
}

interface TDataProps extends ComponentProps<"th"> {
  children: ReactNode
}
function TData({ className = '', children, ...props}: TDataProps) {
  return (
    <td className={`text-xxs text-accent font-medium ${className}`} {...props}>
      {children}
    </td>
  )
}


export {
  Table,
  THead,
  THeading,
  TBody,
  TRow,
  TData
}