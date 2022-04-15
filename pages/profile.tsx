import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  return (
    <Layout>
      <AuthContent>
        <ProfileForm />
      </AuthContent>
    </Layout>
  );
}
