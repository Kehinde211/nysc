"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Form {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [formDetails, setFormDetails] = useState<Form>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formDetails;

    if (!email || !password) {
      console.log("Both email and password are required");
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      console.log("Invalid login");
    }
  };

  return (
    <>
    <form onSubmit={submitDetails}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formDetails.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formDetails.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>

    <p>New here?</p>
    <Link href="/signup"><span className="">Sign Up</span></Link>
    </>
  );
};
