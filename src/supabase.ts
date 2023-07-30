import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://lzhfpvlcyvvjmkdhmxzj.supabase.co",
	import.meta.env.VITE_SUPABASE_PASSWORD
)