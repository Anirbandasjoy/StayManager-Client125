export const handleGoogleLogin = () => {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
};

export const handleGithubLogin = () => {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/github`;
};
