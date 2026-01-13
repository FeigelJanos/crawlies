import { useFormStatus } from "react-dom";
import { Form } from "react-router";


export function EntryForm() {
  const isLogin = true
    if(isLogin){
      return (
            <Form method="post">
        <input type="text" name="name"></input>
        <label htmlFor="name">Username</label>
        <input type="password" name="password"></input>
        <label htmlFor="password">Password</label>
        <Button />
        <a href="/">Register</a>
    </Form>
      )
    }
    return (
      <Form method="post">
        <input type="text" name="userName"></input>
        <label htmlFor="userName">Username: </label>
        <input type="email" name="email"></input>
        <label htmlFor="email">Email: </label>
        <input type="password" name="password"></input>
        <label htmlFor="password">Password: </label>
      </Form>
    )
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}