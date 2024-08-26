
"use client"
import {SignUp} from "@/components/SignUp"
import { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

type AuthData = {
  user: {
    name: string;
    username: string;
  };
};

const checkAuth = async (token: string | undefined): Promise<AuthData | null> => {
  try {
    if (token) {
      const response = await axios.get("/api/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.isValid) {
        return response.data;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default function H() {
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");

    const fetchAuthData = async () => {
      const data = await checkAuth(token);
      if (data) {
        router.push('/');
      } else {
        setAuthData(data);
      }
      setLoading(false);
    };

    fetchAuthData();
  }, [router]);

  if (loading) {
    return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className='text-white'>Loading...</div>
    </div>
    )
  }

  if (authData) {
    return(
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div>Redirecting to <a href="/" className="text-white">signin</a>...</div>
    </div>
    );
  }
return(
        <div className="text-white flex justify-center items-center h-[100vh] w-[100vw]">
            <SignUp></SignUp>
        </div>
    )
}