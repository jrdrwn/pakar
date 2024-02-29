import Link from "next/link";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export default function PasswordInput({ bottomLabel = true }) {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const handlePasswordToggle = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    setPasswordToggle(!passwordToggle);
  };
  return (
    <label className="form-control  mx-auto w-full max-w-xs" for="password">
      <div className="label">
        <span className="label-text before:mr-1 before:text-primary before:content-['*']">
          Password
        </span>
      </div>
      <div className="relative">
        <button
          onClick={handlePasswordToggle}
          className="absolute left-auto right-2 top-[14px]"
        >
          {passwordToggle ? (
            <MdOutlineVisibilityOff size={24} />
          ) : (
            <MdOutlineVisibility size={24} />
          )}
        </button>
        <input
          type={passwordToggle ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Masukkan Password Anda..."
          className="input input-bordered input-primary w-full max-w-xs pr-10"
        />
      </div>
      {bottomLabel && (
        <div className="label">
          <span className="label-text-alt">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox-primary checkbox checkbox-sm mr-2"
                />
                <span className="label-text">Remember me</span>
              </label>
            </div>
          </span>
          <Link
            href={"#"}
            className=" link-hover label-text-alt text-error hover:!text-error"
          >
            Forgot Password?
          </Link>
        </div>
      )}
    </label>
  );
}
