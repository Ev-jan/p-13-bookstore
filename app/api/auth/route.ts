import { NextResponse, NextRequest } from "next/server";

interface AuthRequestData {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {

  if (request.method !== "POST") {
    return NextResponse.json(
      { error: true, message: "Only POST" },
      { status: 405 }
    );
  }

  const body = JSON.parse(await request.text()) as AuthRequestData;

  const { email, password } = body;

  const validatePassword = (password: string) => {
    const regex = /\s/;
    const isValid =
      password.length >= 6 && password.length <= 15 && !regex.test(password);
    return isValid;
  };

  const validateEmail = (email: string) => {
    const isValid =
    email.trim() !== "" && /\S+@\S+\.\S+/.test(email);
    return isValid
  };

  if(!validatePassword(password) || !validateEmail(email)){
    return NextResponse.json(
        { error: true, message: "Email or password are incorrect" },
        { status: 400 }
    )
  } else {
    return NextResponse.json(
        { success: true, token: "testToken" },
        { status: 200 }
    )
  }
}
