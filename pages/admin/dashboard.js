import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard({ session }) {
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
