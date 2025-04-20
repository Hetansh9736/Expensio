import React, { useEffect, useState } from "react";
import { supabase } from "@/helper/supabaseClient";
import { Navigate } from "react-router-dom";

function Wrapper({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
      setLoading(false);
    });

    getSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default Wrapper;
