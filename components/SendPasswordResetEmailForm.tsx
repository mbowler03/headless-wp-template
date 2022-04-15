import { useMutation, gql } from "@apollo/client";

const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(
      input: { username: $username }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default function SendPasswordResetEmailForm() {
  const [sendPasswordResetEmail, { loading, error, data }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL
  );
  const wasEmailSent = Boolean(data?.sendPasswordResetEmail?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(data);
    sendPasswordResetEmail({
      variables: {
        username: email,
      }
    }).catch(error => {
      console.error(error);
    });
  }

  if (wasEmailSent) {
    return (
      <p className="mt-2 text-base text-gray-500"> Please check your email. A password reset link has been sent to you.</p>
    );
  }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Forgot Your Password?
        </h2>
      </div>
    <form method="post" onSubmit={handleSubmit}>
      <div>
      <p className="mt-2 mb-2 text-base text-gray-500">
        Enter the email associated with your account and you&#39;ll be sent a link
        to reset your password.
      </p>
      </div>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="password-reset-email" className="sr-only">Email</label>
        <input
          id="password-reset-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder="Email"
        />
        {error ? (
          <p className="error-message">{error.message}</p>
        ) : null}
        <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {loading ? 'Sending...' : 'Send password reset email'}
        </button>
      </fieldset>
    </form>
    </div>
    </div>
  );
}
