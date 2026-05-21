import ImageKit from "./ImageKit";

const SingleComment = () => {
  return (
    <div className="p-4 bg-white rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <ImageKit
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="rounded-full w-10 h-10 object-cover"
          w="40"
        />
        <span className="font-medium">john Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam dicta nisi molestiae cumque, in esse quas porro quo cupiditate recusandae dolorum totam ea adipisci harum tempora quasi velit veritatis.</p>
      </div>
    </div>
  );
};

export default SingleComment;
