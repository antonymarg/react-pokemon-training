interface CardGridProps {
  children: React.ReactNode
  }

export function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {children}
    </div>
  )
}
