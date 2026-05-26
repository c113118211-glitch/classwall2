import { createClient } from "@supabase/supabase-js";

// 直接寫死正確的資料庫網址與全新 sb_publishable 密碼！
const url = "https://ncfqxllmshjnbjghafvr.supabase.co";
const anonKey = "sb_publishable_AS08jbPbmhlSW7gNwg9rdw_y2-vIbsg";

if (typeof window !== "undefined" && (!url || !anonKey)) {
  console.error(
    "[ClassWall] 缺少 Supabase 環境變數。請複製 .env.example 為 .env.local，填入 NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY，改完記得重啟 npm run dev。"
  );
}

export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  anonKey || "placeholder-anon-key"
);
