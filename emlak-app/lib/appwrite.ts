import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Platform } from "react-native";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.project!)

switch (Platform.OS) {
    case 'ios':
        client.setPlatform("com.dennis.emlakapp");
        break;
    case 'android':
        client.setPlatform("com.jsm.emlakapp");
        break;
}

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL("/");
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri)

        if (!response) throw new Error("Login failed");

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);

        if (browserResult.type !== 'success') throw new Error("Authentication failed");

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();

        if (!secret || !userId) throw new Error("Invalid response from authentication");

        const session = await account.createSession(userId, secret);
        if (!session) throw new Error("Session creation failed");

        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.error("Logout failed:", error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (response.$id) {
            const userAvatar = avatar.getInitials(response.name);
            return {
                ...response,
                avatar: userAvatar.toString(),
            }
        }

        return null;
    } catch (error) {
        console.error("Failed to get the response:", error);
        return null;
    }
}
