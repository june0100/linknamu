import { linkIds } from "@/data/links";
import { getDb } from "@/lib/mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

async function getClicks() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

// 모든 링크의 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 돌려준다
export async function GET() {
  const clicks = await getClicks();
  const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));

  return Response.json({ counts });
}

// 링크 하나의 클릭 수를 1 늘린다 (처음 눌린 링크면 문서를 새로 만든다)
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 페이지에 있는 링크만 집계해서 아무 id로 문서가 쌓이지 않게 막는다
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicks();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
