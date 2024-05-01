"use client"

import { BoardList } from "./_components/board-list"
import { EmptyOrg } from "./_components/empty-org"
import { useOrganization } from "@clerk/nextjs"

interface DashBoardPageProps {
  searchParams: {
    search?: string,
    favourite: string
  }
}

const DashBoardPage = ({
  searchParams
}: DashBoardPageProps) => {

  const { organization } = useOrganization()

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />)
        :
        <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      }
    </div>
  )
}

export default DashBoardPage