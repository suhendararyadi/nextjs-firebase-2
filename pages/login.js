import { signIn } from "next-auth/react";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      alert(result.error);
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
