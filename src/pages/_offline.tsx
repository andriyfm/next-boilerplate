import Button from "@/atoms/Button";
import { useRouter } from "next/router";

export default function OfflinePage() {
  const { replace } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-screenBG">
      <div className="flex-1 py-20 space-y-2 text-center">
        <h1 className="text-5xl font-black">Offline</h1>
        <div className="w-10/12 mx-auto text-sm text-secondary">
          <p>
            Eiusmod proident incididunt nisi reprehenderit nisi Lorem
            exercitation veniam sunt anim qui culpa deserunt. Adipisicing sit
            cupidatat voluptate non. Sint exercitation ipsum aute quis commodo
            ex. Lorem pariatur aliqua enim ullamco cupidatat officia pariatur
            cupidatat. In consequat commodo nulla anim pariatur aute in
            exercitation sit dolor fugiat do velit est. Ullamco incididunt
            nostrud anim ex occaecat proident voluptate aute sit eu.
          </p>
        </div>
      </div>

      <div className="p-3.5 w-full">
        <Button
          className="w-full !shadow-base"
          onClick={() => replace("/")}
          text="Home"
        />
      </div>
    </div>
  );
}
