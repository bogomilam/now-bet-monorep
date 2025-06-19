export default function LoginButton() {
  const handleLogin = () => {
    const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
    const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
    const redirectUri = window.location.origin + "/api/auth/callback";

    const authUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=openid profile email`;

    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Log in with Auth0</button>;
}
