import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconMailCheck } from "@tabler/icons-react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useAppContext } from "../App";
import { doc, setDoc } from "firebase/firestore"; 
import { usersDetailRef } from "../firebase/firestore";

function Yourprofile() {
  const auth = getAuth();
  const { user, bio, setBio } = useAppContext();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [photo, setPhoto] = useState(user.photo);
  
  const updateBio = async (e) => {
    e.preventDefault()
    try {
      await setDoc(doc(usersDetailRef, auth.currentUser.uid), {
        bio: bio
      }, {
        merge: true
      });
      toast.success("Update Successfully");
    } catch (error) {
      console.log(error)
      toast.error(error.code);
    }
  }



  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success("Verification email sent");
      })
      .catch((error) => {
        toast.error("Error sending verification email");
      });
  };

  return (
    <div className="bg-white min-h-screen w-screen flex flex-col items-center justify-center">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:bg-gray-500 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-white bg-black" />
      </Link>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center">
          {photo ? (
            <img
              src={photo}
              alt="user"
              className="size-36 cursor-pointer rounded-full mb-2"
            />
          ) : (
            <img
              src="./user.png"
              alt="user"
              className="size-36 cursor-pointer rounded-full"
            />
          )}

          <p className="cursor-pointer text-blue-900 font-semibold hover:underline">
            Change Profile Picture
          </p>
        </div>
        <form action="" className="flex flex-col gap-16 min-w-[700px] p-6">
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="flex flex-col gap-1">
                <p className="ps-2">Your Name</p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
                />
              </label>
            </div>

            <div>
              <label htmlFor="email" className="flex flex-col gap-1">
                <div className="flex items-center  gap-3">
                  <p className="ps-2">Your Email</p>
                  {auth.currentUser.emailVerified ? (
                    <p className="p-1 bg-slate-200 text-xs rounded-md cursor-pointer flex gap-1">
                      <IconMailCheck className="size-4" /> Verified
                    </p>
                  ) : (
                    <p
                      onClick={verifyEmail}
                      className="p-1 bg-slate-200 text-xs rounded-md cursor-pointer"
                    >
                      Verify Your Email
                    </p>
                  )}
                </div>
                <input
                  disabled
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Your Email"
                  className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
                />
              </label>
            </div>

            <div>
              <label htmlFor="bio" className="flex flex-col gap-1">
                <p className="ps-2">Bio</p>
                <input
                  type="text"
                  id="bio"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  placeholder="Enter Your Bio"
                  className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
                />
              </label>
            </div>

            <div>
              <label htmlFor="username" className="flex flex-col gap-1">
                <p className="ps-2">Your Username</p>
                <input
                  disabled
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter Your Username"
                  className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
                />
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={updateBio}
              className="flex justify-center items-center select-none gap-2 py-3 px-5 bg-black rounded-xl text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Yourprofile;