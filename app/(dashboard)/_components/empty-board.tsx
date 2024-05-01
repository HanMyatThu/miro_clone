"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Image from "next/image"

import { useOrganization } from "@clerk/nextjs"
import { api } from "@/convex/_generated/api"
import { useApiMuation } from "@/hooks/use-api-mutation"

export const EmptyBoard = () => {

  const { organization } = useOrganization()
  const { mutate, pending } = useApiMuation(api.board.create);

  const handleOnClick = () => {
    if (!organization) return null

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        console.log(id, 'id')
        toast.success("Board Created")
      })
      .catch(error => {
        toast.error("Failed to create board")
      })
    console.log('here')
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/note.png"
        alt="Empty"
        height={200}
        width={200}
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={handleOnClick}>
          Create board
        </Button>
      </div>
    </div>
  )
}