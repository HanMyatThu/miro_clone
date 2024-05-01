import Image from "next/image"

export const EmptyFavourite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/flag.jpg"
        alt="Empty"
        height={200}
        width={200}
      />
      <h2 className="text-2xl font-semibold mt-6">
        No Favourite
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching For something else
      </p>
    </div>
  )
}