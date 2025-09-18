import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QRLanding() {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);
  const CORRECT_CODE = "JOIN";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">DKMH</h1>
        <p className="text-sm tracking-wider">Don’t Kill My High</p>
        <p className="text-md mt-4 italic">Only the initiated get the playlist.</p>
      </div>

      {!access ? (
        <div className="w-full max-w-xs">
          <Input
            placeholder="Enter code to unlock"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="text-black"
          />
          <Button className="w-full mt-4" onClick={() => setAccess(code === CORRECT_CODE)}>
            Unlock
          </Button>
        </div>
      ) : (
        <div className="mt-6 space-y-2 text-center">
          <p className="text-lg">Access granted.</p>
          <p>
            <a
              href="https://t.me/joinchat/dkmhaccess"
              className="underline text-teal-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tap here to enter the circle
            </a>
          </p>
          <p className="text-xs text-gray-400">This invite will self-destruct after 24h.</p>
        </div>
      )}
    </div>
  );
}
