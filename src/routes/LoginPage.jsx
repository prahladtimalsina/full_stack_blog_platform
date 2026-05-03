import { SignIn } from "@clerk/react";

const LoginPage = () => {
  return (
    <div className="items-center justify-center flex h-screen">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
