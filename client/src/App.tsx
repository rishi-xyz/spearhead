import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./PhaserGame";

function App() {
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    return (
        <div className="flex flex-col">
            <header className="flex items-center justify-between p-5">
                <div className="text-lg font-semibold tracking-wider">
                    SpearHead
                </div>
                {/* Reown AppKit connect button (connects to configured networks e.g., somniaTestnet) */}
                <appkit-button></appkit-button>
            </header>

            <div className=" flex-2">
                <PhaserGame ref={phaserRef} />
            </div>
        </div>
    );
}

export default App;
