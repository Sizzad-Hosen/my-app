

const Page = ({ params }) => {
    console.log(params);
    const blog = blogs?.find((blog) => blog?.slug === params.slug);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const { title, description } = blog;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};
const blogs = [
    {
      slug: "introduction-to-mern-stack",
      title: "Introduction to MERN Stack",
      description: "Learn the basics of the MERN stack and how to set up your development environment."
    },
    {
      slug: "building-a-simple-mern-app",
      title: "Building a Simple MERN App",
      description: "Step-by-step guide to building your first MERN stack application."
    },
    {
      slug: "react-hooks-overview",
      title: "React Hooks Overview",
      description: "A comprehensive overview of React hooks and their usage in functional components."
    },
    {
      slug: "state-management-with-redux",
      title: "State Management with Redux",
      description: "How to manage state in your React applications using Redux."
    },
    {
      slug: "express-routing-tutorial",
      title: "Express Routing Tutorial",
      description: "Learn how to set up routing in your Express applications."
    },
    {
      slug: "mongodb-introduction",
      title: "MongoDB Introduction",
      description: "Introduction to MongoDB and how to use it with Node.js."
    },
    {
      slug: "nodejs-authentication",
      title: "Node.js Authentication",
      description: "Implementing authentication in your Node.js applications."
    },
    {
      slug: "deploying-mern-apps",
      title: "Deploying MERN Apps",
      description: "A guide to deploying your MERN stack applications to the cloud."
    },
    {
      slug: "unit-testing-with-jest",
      title: "Unit Testing with Jest",
      description: "How to write and run unit tests in your JavaScript applications using Jest."
    },
    {
      slug: "optimizing-react-performance",
      title: "Optimizing React Performance",
      description: "Tips and tricks for optimizing the performance of your React applications."
    }
  ];

export default Page;

