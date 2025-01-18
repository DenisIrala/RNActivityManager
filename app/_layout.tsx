import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "SpaceMono": require('@/assets/fonts/SpaceMono-Regular.ttf'),
    "Inter-Bold": require ('@/assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const createDb = async (db :SQLiteDatabase) =>{
    await db.execAsync(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, completed INTEGER);"
    )
  }

  return (
    <SQLiteProvider databaseName="test.db" onInit={createDb}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
       <Stack.Screen name="(crud)" options={{ headerShown: false }} />        
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />

        <Stack.Screen name="+not-found" />
      </Stack>  
      <StatusBar style="auto" hidden/>
    </ThemeProvider>
    </SQLiteProvider>
  );
}