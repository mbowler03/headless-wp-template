import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';


const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    registerUser(
      input: {
        username: $email
        email: $email
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default function SignUpForm() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    register({
      variables: values,
    }).catch((error) => {
      console.error(error);
    });
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Check your email – an account confirmation link has been sent to
        you.
      </p>
    );
  }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign up for an account
          </h2>
        </div>

        <form className='mt-8 space-y-6' method='post' onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='sign-up-first-name' className='sr-only'>
                  First name
                </label>
                <input
                  id='sign-up-first-name'
                  type='text'
                  name='firstName'
                  autoComplete='given-name'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='First Name'
                />
              </div>
              <div>
                <label htmlFor='sign-up-last-name' className='sr-only'>
                  Last name
                </label>
                <input
                  id='sign-up-first-name'
                  type='text'
                  name='lastName'
                  autoComplete='family-name'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Last Name'
                />
              </div>
              <div>
                <label htmlFor='sign-up-email' className='sr-only'>
                  Email
                </label>
                <input
                  id='sign-up-email'
                  type='email'
                  name='email'
                  autoComplete='username'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
            </div>
            {error ? (
              error.message.includes(
                'This email/username is already registered'
              ) ? (
                <p className='error-message'>
                  You&#39;re already signed up!{' '}
                  <Link href='/log-in'>Log in</Link>
                </p>
              ) : (
                <p className='error-message'>{error.message}</p>
              )
            ) : null}
            <button type='submit' disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </fieldset>
          <p>
            Already have an account?{' '}
            <Link href='/log-in'>
              <a className='text-blue-500'>Log in</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
