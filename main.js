import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SEOCostCalculator() {
  const [keywords, setKeywords] = useState(0);
  const [backlinks, setBacklinks] = useState(0);
  const [audit, setAudit] = useState(false);
  const [cost, setCost] = useState(0);

  const calculateCost = () => {
    let total = keywords * 10 + backlinks * 5;
    if (audit) total += 50;
    setCost(total);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-600 to-yellow-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-6">SEO Cost Calculator 📊✨</h1>
      <Card className="w-full max-w-md p-6 bg-orange-700 text-white rounded-2xl shadow-lg">
        <CardContent className="space-y-4">
          <div>
            <label className="block text-lg">🔑 Number of Keywords:</label>
            <Input
              type="number"
              value={keywords}
              onChange={(e) => setKeywords(parseInt(e.target.value) || 0)}
              className="text-black"
            />
          </div>
          <div>
            <label className="block text-lg">🔗 Number of Backlinks:</label>
            <Input
              type="number"
              value={backlinks}
              onChange={(e) => setBacklinks(parseInt(e.target.value) || 0)}
              className="text-black"
            />
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={audit}
                onChange={() => setAudit(!audit)}
              />
              <span>🛠 SEO Audit (+$50)</span>
            </label>
          </div>
          <Button className="w-full bg-yellow-400 text-black font-bold p-2 rounded-xl" onClick={calculateCost}>
            Calculate 💰
          </Button>
          <div className="text-center text-2xl font-bold mt-4">
            Total Cost: <span className="text-yellow-300">${cost}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
