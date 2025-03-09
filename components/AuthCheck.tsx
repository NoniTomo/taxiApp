import { Text } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@/contexts/Auth";

interface AuthCheckProps {
  children: React.ReactNode;
}

export default function AuthCheck({ children }: AuthCheckProps) {
  const { session, isLoading } = useAuth();
  console.log(!session);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log(!session);

  if (!session) {
    return <Redirect href="/auth" />;
  }

  return children;
}
