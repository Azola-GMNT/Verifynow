import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your VerifyNow Account"
      subtitle="Create an account to access trusted verification services across Africa."
    >
      <RegisterForm />
    </AuthLayout>
  );
}