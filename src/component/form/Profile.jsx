import { useEffect, useState } from "react";
import { auth, db } from "../firebase/Firebase"; // فایل تنظیمات Firebase
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      fetchProfile(currentUser.uid);
    }
  }, []);

  const fetchProfile = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      setProfile(userDoc.data());
    }
  };
  const saveProfile = async (uid, name, avatar) => {
    await setUser(
      doc(db, "users", uid),
      {
        name: name,
        avatar: avatar,
      },
      { merge: true }
    );
  };

  const uploadAvatar = async (file, uid) => {
    const storage = getStorage();
    const avatarRef = ref(storage, `avatars/${uid}.jpg`);
    await uploadBytes(avatarRef, file);
    return await getDownloadURL(avatarRef);
  };

  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  if (!user) return <p>لطفاً وارد شوید</p>;
  console.log(user);
  
  return (
    <div className="">
      <h2 className=" absolute mt-28 bg-white p-2 w-60 rounded-e-3xl font-semibold italic">{user.email}</h2>
      <div className={`w-full h-80 bg-black bg-no-repeat ${``}`}>
        {saveProfile}
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
