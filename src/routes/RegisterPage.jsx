import { SignUp } from "@clerk/react";

const RegisterPage = () => {
  return (
    <div className="">
      <div className="items-center justify-center flex h-screen">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default RegisterPage;
