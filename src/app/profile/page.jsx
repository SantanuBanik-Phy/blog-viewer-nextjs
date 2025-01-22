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
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
      <p>Hello, {user.given_name || "User"}!</p>
    </div>
  );
};

export default Profile;
