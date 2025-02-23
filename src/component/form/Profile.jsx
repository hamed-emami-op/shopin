import { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      fetchProfile(currentUser.uid);
    }
  }, [auth]);

  const fetchProfile = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      setProfile(userDoc.data());
    }
  };

  const saveProfile = async (uid, name, avatar) => {
    await setDoc(
      doc(db, "users", uid),
      { name: name, avatar: avatar },
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
    signOut(auth)
      .then(() => {
        console.log("کاربر از سیستم خارج شد.");
        localStorage.clear();
        indexedDB.databases().then((dbs) => {
          dbs.forEach((db) => indexedDB.deleteDatabase(db.name));
        });
        navigate("/login");
      })
      .catch((error) => console.error("مشکل در خروج:", error));
  };

  if (!user) return <p>لطفاً وارد شوید</p>;

  return (
    <div>
      <h2>{user.email}</h2>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
        خروج
      </button>
    </div>
  );
};

export default Profile;
