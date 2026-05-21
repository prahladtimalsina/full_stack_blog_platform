import { Link } from "react-router-dom";
import ImageKit from "../components/ImageKit";
import PostSideMenuActions from "../components/PostSideMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            adfa fasd;preasdfasdf asdfasdf asd fa sdf asdf asdf{" "}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="">written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Development</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            at? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Possimus, architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias, at? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, architecto!Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Molestias, at? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Possimus, architecto!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageKit
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-2xl object-cover"
            w={600}
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos
            labore nisi rem consequatur optio dolor odio molestias itaque fugit
            maxime voluptas beatae ad, ipsa eligendi magni, consequuntur
            provident dicta quae explicabo dignissimos tempora repellendus. Ipsa
            quo reprehenderit molestiae id adipisci suscipit ducimus ipsam
            cumque. Perspiciatis in natus harum recusandae officiis perferendis
            repudiandae deserunt nam ipsam minus, odit quidem, ut laudantium
            saepe, repellat dolores possimus tempora explicabo quas! Dignissimos
            qui aspernatur blanditiis perferendis et quasi necessitatibus
            debitis, voluptatem cumque fugit dolorem molestias ea voluptas
            incidunt molestiae reprehenderit totam consectetur corrupti
            inventore, fugiat accusamus explicabo sint? Laudantium quibusdam
            iste veritatis suscipit?
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <ImageKit
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                className="rounded-full w-12 h-12 object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor fugiat accusamus explicabo sint? Laudantium
              quibusdam iste veritatis suscipit?
            </p>
            <div className="flex gap-2">
              <Link>
                <ImageKit
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  className="rounded-full w-6 h-6 object-cover"
                  w="48"
                  h="48"
                />
              </Link>
              <Link>
                <ImageKit
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  className="rounded-full w-6 h-6 object-cover"
                  w="48"
                  h="48"
                />
              </Link>
            </div>
          </div>
          <PostSideMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className=" underline text-blue-800">All</Link>
            <Link className=" underline text-blue-800">Web Development</Link>
            <Link className=" underline text-blue-800">Programming</Link>
            <Link className=" underline text-blue-800">React</Link>
            <Link className=" underline text-blue-800">Node.js</Link>
            <Link className=" underline text-blue-800">MongoDB</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
