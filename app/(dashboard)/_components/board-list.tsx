"use client"

import { EmptyBoard } from "./empty-board"
import { EmptyFavourite } from "./empty-favourite"
import { EmptySearch } from "./empty-search"

interface BoardListProps {
  orgId: string,
  query: {
    search?: string,
    favourite?: string,
  }
}

export const BoardList = ({
  orgId,
  query
}: BoardListProps) => {

  const data = []

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favourite) {
    return <EmptyFavourite />
  }

  if (!data.length) {
    return <EmptyBoard />
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}