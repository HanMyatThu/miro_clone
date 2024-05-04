"use client"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

import { EmptyBoard } from "./empty-board"
import { EmptyFavourite } from "./empty-favourite"
import { EmptySearch } from "./empty-search"
import { BoardCard } from "./board-card"
import { NewBoardButton } from "./new-board-button"

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

  const data = useQuery(api.boards.getBoards, { orgId })

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favourite ? "Favorite Boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
        gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    )
  }

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
      <h2 className="text-3xl">
        {query.favourite ? "Favorite Boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
      gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => {
          return (
            <BoardCard
              key={board._id}
              id={board._id}
              imageUrl={board.imageUrl}
              title={board.title}
              authorId={board.authorId}
              authorName={board.authorName}
              createdAt={board._creationTime}
              orgId={board.orgId}
              isFavorite={false}
            />
          )
        })}
      </div>
    </div>
  )
}