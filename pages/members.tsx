import Layout from "../components/Layout";
import AuthContent from "../components/AuthContent";

export default function Map() {
  return (
    <Layout>
      <AuthContent>
        <div className="flex justify-center items-center flex-col pt-20 pb-20 text-center font-bold lg:text-6xl text-5xl space-y-2">
			<h1 className="text-gray-900 pb-10">
				Map:  
				<span className="text-blue-400"> Here is where the Map content will go when signed in </span>
			</h1>
		</div>
      </AuthContent>
    </Layout>
  );
}
