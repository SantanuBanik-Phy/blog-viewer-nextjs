import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    redirect("/api/auth/login");
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center border-b pb-4">
          Welcome to Your Profile
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
          Hello, <span className="font-semibold text-gray-800">{user.given_name || "User"}</span>!
        </p>
       
      </div>
    </div>
  );
};

export default Profile;