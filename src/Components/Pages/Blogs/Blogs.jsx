const Blogs = () => {
  const blogs = [
    {
      title:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      author: "Aminur Rashid Reza",
      date: "May 19, 2023",
      content:
        "To provide secure and effective user authentication and authorization, access tokens and refresh tokens are crucial components in authentication systems.A credential that symbolizes the user's authorization is called an access token. It usually consists of information like the user's identity, their permissions, and its expiration date. An access token is given to a user who logs in or makes a request for access to protected resources. In order to validate their identity and gain access to the permitted resources, this token is then supplied in subsequent requests",
    },
    {
      title: "Compare SQL and NoSQL databases?",
      author: "Aminur Rashid Reza",
      date: "May 19, 2023",
      content:
        "With different methods for data storage and retrieval, SQL and NoSQL databases each have their own appeal. Like trusted companions, SQL databases provide organization and dependability. To guarantee data consistency and integrity, they use specified schemas and structured query language. They provide a sense of security and order by ensuring transactions and upholding relationships with ACID characteristics. On the other side, NoSQL databases embrace flexibility and scalability like intrepid partners. They reject schemas, enabling the storing of dynamic and unstructured data. They excel at managing enormous amounts of data and adapt to changing needs, giving the freedom to develop. Both approaches have merit and encourage us to make a decision depending on our requirements and goals, whether it be tradition or innovation, constancy or adaptation.        ",
    },
    {
      title: "What is express js? What is Nest JS?",
      author: "Aminur Rashid Reza",
      date: "May 19, 2023",
      content:
        "Two enchanted frameworks that control the realm of web development are Express.js and Nest.js. Express.js offers a flexible and simple approach, dancing across the digital world like a nimble pixie. It gives programmers the flexibility to easily shape their applications, making routing, middleware, and HTTP handling magically easy. Like a powerful magician, Nest.js combines the might of TypeScript with the knowledge of Angular and Node.js. It creates an organized tapestry that makes server-side programs scalable and maintainable. Nest.js gives order to the chaos by fusing decorators, modules, and dependency injection in a beautiful way that ignites a spark of confidence and elegance. Whether you like the clever structure of Nest.js or the whimsical simplicity of Express.js, both frameworks have the potential to change the way you develop software.",
    },
    {
      title: "What is MongoDB aggregate and how does it work?",
      author: "Aminur Rashid Reza",
      date: "May 19, 2023",
      content:
        "The aggregate function in MongoDB is a magical spell that summons strong data transformations. It embraces the essence of sorcery and gives you access to your data collections' untapped potential. Aggregate creates a tapestry of processes using its incantations of stages and pipelines, conjuring the desired outcomes. You can cast a spell of change on your data by merging, filtering, grouping, and reshaping it as you move through the enchanted stages. A new understanding of the story told by your data can be manifested by aggregate through the skillful fusion of match, sort, project, and other mystical processes. You can grasp data modification with MongoDB aggregate by utilizing the mysterious abilities of aggregation pipelines. You set out to discover the secrets in your data.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary text-center">
        Welcome to Blog
      </h1>
      <div className="">
        {blogs.map((blog) => (
          <div key={blog.title} className="bg-white rounded-lg shadow-lg mb-10">
            <div className="p-4">
              <h2 className="text-xl text-accent font-bold mb-2">
                {blog.title}
              </h2>
              <p className="mb-2 text-info">
                By {blog.author} | {blog.date}
              </p>
              <p className="text-gray-700">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
