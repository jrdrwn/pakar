import Link from "next/link";
import { MdHome } from "react-icons/md";

export default function Wrapper({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Link href={"/"}>
        <button className="btn btn-circle btn-outline btn-primary">
          <MdHome size={24} />
        </button>
      </Link>
      {children}
    </div>
  );
}
