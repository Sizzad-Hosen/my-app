import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB(); // Await the connection to the database
    if (!db) {
      return new Response(JSON.stringify({ message: 'Database connection failed' }), { status: 500 });
    }

    const userCollection = db.collection('users');
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);

    return new Response(JSON.stringify({ message: 'New user created', result: res }), { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
  }
};
