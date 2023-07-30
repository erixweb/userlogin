import { useState } from "preact/hooks"
import { supabase } from "./supabase"

/*const nameList = [
  "erixweb",
  "midudev",
  "laura",
]
const pictureList = [
  "/vite.svg"
]
*/

export function App() {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const handleInsertUser = async (e: any) => {
    e.preventDefault()

    if (mail.length < 2 || !mail.endsWith("@gmail.com") || password.length < 2) return

    await supabase.auth.signUp({
      email: mail,
      password: password
    })
  }
  const handleMailChange = (e: any) => {
    const { target } = e

    setMail(target!.value)
  }
  const handlePasswordChange = (e: any) => {
    const { target } = e

    setPassword(target!.value)
  }

	return (
		<form onSubmit={handleInsertUser}>
			<input type="text" onChange={handleMailChange}/>
			<input type="password" onChange={handlePasswordChange}/>

			<input type="submit" />
		</form>
	)
}
