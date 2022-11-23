import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState();
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`https://doctors-server-one.vercel.app/user/adming/${email}`, {
      headers: {
        authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        setIsAdminLoading(false);
      });
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
