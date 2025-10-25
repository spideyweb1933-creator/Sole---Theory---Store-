import { useEffect } from 'react';
export default function AdminRedirect() {
  useEffect(() => {
    window.location.href = 'https://sole-theory-admin.vercel.app';
  }, []);
  return null;
