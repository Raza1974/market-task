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