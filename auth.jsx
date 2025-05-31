import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from "./integration/supabase";
import md5 from "md5";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setSession(data.session);
        setUser(data.session.user);
      }
      setLoading(false);
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);


const signUp = async (email, password, name) => {
  const avatarUrl = `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?d=identicon`;
  
  // Hash password before saving in profile (DON'T save raw password)
  const hashedPassword = md5(password);

  // Supabase signup
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, avatar_url: avatarUrl },
    },
  });

  if (error) throw error;

  const userId = data.user?.id;
  if (userId) {
    // Save profile info + hashed password (never save raw password)
    const { error: upsertError } = await supabase.from("profiles").upsert({
      id: userId,
      email,
      name,
      avatar_url: avatarUrl,
      password: hashedPassword,
    });

    if (upsertError) {
      console.error("Profile upsert error:", upsertError);
      throw upsertError;
    }
  }

  return data.user;
};

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    setSession(data.session);
    setUser(data.user);

    return data.user;
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) throw error;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const updateProfile = async (updates) => {
    const { data, error } = await supabase.auth.updateUser({ data: updates });
    if (error) throw error;

    setUser(data.user);
    return data.user;
  };

  const value = {
    user,
    session,
    loading,
    isAuthenticated: !!user,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
