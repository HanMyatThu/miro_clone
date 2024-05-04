"use client";

import { api } from "@/convex/_generated/api";
import { useApiMuation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface INewBoardButton {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({
  orgId,
  disabled
}: INewBoardButton) => {

  const { mutate, pending } = useApiMuation(api.board.create)

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled"
    }).then((id) => {
      toast.success("Board created")
    }).catch(e => {
      toast.error('Failed to create board')
    })
  }

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={
        cn(
          "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
          (disabled || pending) && "opacity-60 hover:bg-blue-600 cursor-not-allowed"
        )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-white">
        New Board
      </p>
    </button>
  )
}