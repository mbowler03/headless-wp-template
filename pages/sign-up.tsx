import Layout from "../components/Layout";
import UnAuthContent from "../components/UnAuthContent";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <Layout>
      <UnAuthContent>
        <SignUpForm />
      </UnAuthContent>
    </Layout>
  );
}
