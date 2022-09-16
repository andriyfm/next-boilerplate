import { rest } from "msw";

export const hello = [
  rest.get(`/api/hello`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({ name: "andri firmansyah" })
    );
  }),
];
