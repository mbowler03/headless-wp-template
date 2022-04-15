import Layout from "../components/Layout";
import UnAuthContent from "../components/UnAuthContent";
import SendPasswordResetEmailForm from "../components/SendPasswordResetEmailForm";

export default function ForgotPassword() {
  return (
    <Layout>
      <UnAuthContent>
        <SendPasswordResetEmailForm />
      </UnAuthContent>
    </Layout>
  )
}
