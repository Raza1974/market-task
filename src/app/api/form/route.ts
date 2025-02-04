
// import { NextResponse } from "next/server";
// import {client} from "@/sanity/lib/client"; // Update this path as necessary
// import bcrypt from "bcrypt";
// import jwt from 'jsonwebtoken';
// import { NextApiResponse } from "next";


// export const POST = async (req: Request, res: NextApiResponse) => {
//   try {
//     // Parse the incoming request body
//     const { name, email, password } = await req.json();

//     // Validate the input
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { message: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     // 🚨 Check if user already exists in Sanity
//     const existingUser = await client.fetch(
//       `*[_type == "user" && email == $email][0]`,
//       { email }
//     );
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists with this email." },
//         { status: 409 } // 409 Conflict
//       );
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 11);

//     // Save user to Sanity
//     const result = await client.create({
//       _type: "user",
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Respond with success
//     // return NextResponse.json(
//     //   { message: "User created successfully", user: result },
//     //   { status: 201 }
//     // );


//     // Create JWT token
//     const token = jwt.sign({ name: name, email:email },
//       "4028390d7f644efc904d598bc8bd9f82e3aeb96bae3eb4f88a926b0ffe4d1b5f"
//        , {
//         expiresIn: '1h',
//       });
  
//       // Set token in HTTP-only cookie
//       res.setHeader('Set-Cookie', `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`);
//    // Respond with success
//    return NextResponse.json(
//     { message: "User created successfully", user: result },
//     { status: 201 }
//   );

//   } catch (error) {
//     console.error("Error creating user:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// };

import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables");
}
const secretKey = process.env.JWT_SECRET;

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 11);

    const result = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ name: name, email: email }, secretKey, {
      expiresIn: '1h',
    });

    const response = NextResponse.json(
      { message: "User created successfully", user: result },
      { status: 201 }
    );

    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}