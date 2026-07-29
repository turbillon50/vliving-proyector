import { readFileSync } from "fs";
import { join } from "path";
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  try {
    const d = JSON.parse(readFileSync(join(process.cwd(), "datos", "escenarios.json"), "utf8"));
    res.status(200).json(d);
  } catch (e) { res.status(500).json({ error: String(e) }); }
}
