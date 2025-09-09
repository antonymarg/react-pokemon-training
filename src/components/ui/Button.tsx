import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
}

const getVariantStyles = (variant: ButtonVariant): string => {
  const styles = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white border border-transparent shadow-lg hover:shadow-xl dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600',

    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 active:from-gray-300 active:to-gray-400 text-gray-900 border border-transparent shadow-md hover:shadow-lg dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 dark:text-gray-100',

    outline: 'bg-gradient-to-r from-transparent to-transparent hover:from-gray-50 hover:to-blue-50 active:from-gray-100 active:to-blue-100 text-gray-700 border-2 border-gray-300 hover:border-blue-300 shadow-sm hover:shadow-md dark:hover:from-gray-800 dark:hover:to-blue-900 dark:text-gray-300 dark:border-gray-600 dark:hover:border-blue-500',

    ghost: 'bg-gradient-to-r from-transparent to-transparent hover:from-gray-100 hover:to-gray-200 active:from-gray-200 active:to-gray-300 text-gray-700 border border-transparent hover:shadow-md dark:hover:from-gray-800 dark:hover:to-gray-700 dark:text-gray-300',

    danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900 text-white border border-transparent shadow-lg hover:shadow-xl dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700',
  }
  return styles[variant]
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:transform-none focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800'

  const variantClasses = getVariantStyles(variant)
  const sizeClasses = sizeStyles[size]

  const isDisabled = disabled || loading

  const buttonClasses = [
    baseStyles,
    variantClasses,
    sizeClasses,
    className,
  ].join(' ')

  return (
    <button
      disabled={isDisabled}
      className={buttonClasses}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children || 'Loading...'}
        </>
      ) : (
        children
      )}
    </button>
  )
}
