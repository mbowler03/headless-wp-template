import { useMutation, gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($title: String!, $content: String!) {
    createPost(input: {
      title: $title
      content: $content
      status: PUBLISH
    }) {
      post {
        databaseId
      }
    }
  }
`;

export default function CreatePostForm() {
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  const wasPostCreated = Boolean(data?.createPost?.post?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    createPost({
      variables: values
    }).catch(error => {
      console.error(error);
    });
  }

  if (wasPostCreated) {
    return (
      <p>Post successfully created.</p>
    );
  }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Create a Post
        </h2>
      </div>
    <form className='mt-8 space-y-6' method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
      <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
        <label htmlFor="create-post-title" className="sr-only">Title</label>
        <input
          id="create-post-title"
          type="text"
          name="title"
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Title'
        />
        <label htmlFor="creat-post-content" className="sr-only">Content</label>
        <textarea
          id="creat-post-content"
          name="content"
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Content'
        />
        </div>
        {error ? (
          <p className="error-message">{error.message}</p>
        ) : null}
        <button type="submit" disabled={loading}className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {loading ? 'Creating post...' : 'Create post'}
        </button>
      </fieldset>
    </form>
    </div>
    </div>
  )
}
