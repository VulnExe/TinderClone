import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoadingInitial(false)
      setLoading(false)
    });
    return unsubscribe; 
  }, []);

  const logout = () => {
    console.log("hhh");
    signOut(auth).then(() => {
      setUser(null);
      navigation.navigate("Login")
    });
  };

  const memoedValue = useMemo(() => {
    return { user, setUser, loading, setLoading, logout };
  }, [user, loading]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
