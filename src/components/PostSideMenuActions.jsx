const PostSideMenuActions = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>

      {/* Save */}
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 3h-10.5A2.25 2.25 0 004.5 5.25v15l7.5-4.5 7.5 4.5v-15A2.25 2.25 0 0017.25 3z"
          />
        </svg>
        <span>Save the post</span>
      </div>

      {/* Delete */}
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 7.5h12M9.75 7.5v9m4.5-9v9M4.5 7.5h15M10.5 3h3a1.5 1.5 0 011.5 1.5v1.5h-6V4.5A1.5 1.5 0 0110.5 3z"
          />
        </svg>
        <span>Delete the post</span>
      </div>
    </div>
  );
};

export default PostSideMenuActions;