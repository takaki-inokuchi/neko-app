import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <header>
      {user ? (
        <>
          <span>ようこそ、{user.displayName}</span>
          <button onClick={logout}>ログアウト</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Googleでログイン</button>
      )}
    </header>
  );
}
