

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
      <div className="bg-gray-200 " >
         <div className="flex container justify-between  mx-auto  py-4 px-4">
            <div>
                <h2>My Blog</h2>
            </div>
            <div>
                <ul className="flex  gap-6 items-center">
                    <li>
                        <Link className="btn border border-gray-500 px-2 py-1 rounded-md"   href="/"> Home</Link>
                    </li>
                    <li>
                        <Link href="/profile"> Profile</Link>
                    </li>
                   
                   {
                    user? <>
                    
                    <li>
                        <Link className="btn border border-gray-500 px-2 py-1 rounded-md"   href="/api/auth/logout"> Logout</Link>
                    </li>
                   
                    </>: <>
                    <li>
                        <Link className="btn border border-gray-500 px-2 py-1 rounded-md"   href="/api/auth/login"> Login</Link>
                    </li>
                    <li>
                        <Link className="btn border border-gray-500 px-2 py-1 rounded-md"    href="/api/auth/register"> Register</Link>
                    </li> 
                    </>
                   }
                </ul>
            </div>
            
        </div>
      </div> 
    );
};

export default Navbar;