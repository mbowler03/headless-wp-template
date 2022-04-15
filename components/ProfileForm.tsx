import { useMutation, gql } from "@apollo/client";

import useAuth, { User } from "../hooks/useAuth";

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $id: ID!
    $firstName: String!,
    $lastName: String!,
    $email: String!
  ) {
    updateUser(input: {
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
    }) {
      user {
        databaseId
      }
    }
  }
`;

export default function ProfileForm() {
  const { user } = useAuth();
  const { id, firstName, lastName, email } = user as User;
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  const wasProfileUpdated = Boolean(data?.updateUser?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    updateProfile({
      variables: { id, ...values, },
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Update your profile
        </h2>
      </div>
    <form className='mt-8 space-y-6' method="post" onSubmit={handleSubmit}>
      {wasProfileUpdated ? (
        <p className="profile-update-confirmation">
          ✅ Profile details have been updated.
        </p>
      ) : null}
      <fieldset disabled={loading} aria-busy={loading}>
      <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
<div>
        <label htmlFor="profile-first-name" className="sr-only">First Name</label>
        <input
          id="profile-first-name"
          type="text"
          name="firstName"
          defaultValue={firstName || ''}
          autoComplete="given-name"
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='First Name'
        />
        </div>
        <div>
        <label htmlFor="profile-last-name" className="sr-only">Last Name</label>
        <input
          id="profile-last-name"
          type="text"
          name="lastName"
          defaultValue={lastName || ''}
          autoComplete="family-name"
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Last Name'
        />
        </div>
        <div>
        <label htmlFor="profile-email" className="sr-only">Email</label>
        <input
          id="profile-email"
          type="email"
          name="email"
          defaultValue={email || ''}
          autoComplete="email"
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Email'
        />
        </div>
        </div>
        {error ? (
          <p className="error-message">{error.message}</p>
        ) : null}
        <button type="submit" disabled={loading}className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {loading ? 'Updating...' : 'Update'}
        </button>
      </fieldset>
    </form>
    </div>
    </div>
  );
}
