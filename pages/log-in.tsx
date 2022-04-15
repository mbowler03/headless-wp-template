import Layout from "../components/Layout";
import UnAuthContent from "../components/UnAuthContent";
import LogInForm from "../components/LogInForm";

export default function LogIn() {
  return (
    <Layout>
      <UnAuthContent>
        <LogInForm />
      </UnAuthContent>
    </Layout>
  );
}
