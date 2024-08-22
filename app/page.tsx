import {UserCard} from "@/components/usercard"

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <UserCard name="sarfaraz" email="sarfaraz.8.kh@gmail.com">
      </UserCard >
    </div>
  );
}
