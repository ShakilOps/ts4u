import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <Layout>
      <div className="container">
        <h1>Create a new account</h1>
        <RegisterForm />
      </div>
    </Layout>
  );
}
