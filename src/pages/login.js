import ModalLayout from "@/components/ModalLayout";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Layout>
      <div className="container">
        <h1>Log in to your account</h1>
        <LoginForm />
      </div>
     
    </Layout>
  );
}
