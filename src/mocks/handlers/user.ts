import { rest } from "msw";

export const user = [
  rest.get(`/api/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "arianti firmansyah" }));
  }),
];
