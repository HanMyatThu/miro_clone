import { v } from "convex/values"
import { query } from "./_generated/server"


export const getBoards = query({
  args: {
    orgId: v.string()
  },
  handler: async (ctx, args) => {
    const identitiy = await ctx.auth.getUserIdentity()

    if (!identitiy) {
      throw new Error ("Unauthorized")
    }

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect()

    return boards
  }
})
