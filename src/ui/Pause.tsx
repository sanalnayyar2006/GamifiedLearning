"use client";

type PauseMenuProps = {
  onResume: () => void;
};

export default function PauseMenu({
  onResume,
}: PauseMenuProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-zinc-900 rounded-xl p-8 w-[400px] text-center">

        <h1 className="text-3xl font-bold text-white mb-8">
          Paused
        </h1>

        <div className="flex flex-col gap-4">

          <button
            onClick={onResume}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Resume
          </button>

          <button
            className="bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-lg"
          >
            Settings
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
          >
            Quit
          </button>

        </div>

      </div>

    </div>
  );
}