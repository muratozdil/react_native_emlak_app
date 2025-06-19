# Welcome to my Emlakapp👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Detailed Info About my Project 
[`Video`](https://youtu.be/gNLbUQCZmO0).
[`Documatation`](https://drive.google.com/file/d/1a79dc3QgJQ3RWbCYGk0t4Kz0tRF8toCF/view?usp=sharing).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
   
2. Create .env.local file in the cloned repository and paste the code below

  ```bash
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=6838610b0039613ef3ef
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=68407b2c0026f239ce3a
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=68407c77000e207890f1
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=68407cec002737c91569
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=68407d26003a076887cd
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=68407d920007cfb9d5fb
   ```

3. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

For the best experience, stick to a IOS device or emulator

## Project Directory

1. App/
   1. (root)/tabs/
      Alt sekmeli navigasyon yapısı burada tanımlanır.
      • index.tsx: Ana sayfa
      • explore.tsx: Keşfet sayfası
      • profile.tsx: Profil ekranı
      • _layout.tsx: Bu klasördeki sayfalar için layout yönetimi yapılır.
   2. properities/
      Emlak ilanı detayları gibi dinamik sayfaları barındırır.
      • [id].tsx: Belirli bir ilanın detay sayfası
      • _layout.tsx: Tüm properties/ sayfalarına ortak yapı sağlar.
   3. sign-in.tsx: Google OAuth giriş ekranı
   4. _layout.tsx: Tüm uygulama genelinde kullanılan ana layout dosyası
   5. globals.css: Uygulamanın genel stil ayarlarını içerir
2. Assets/
   1. fonts/: Özel font dosyaları
   2. icons/: SVG veya PNG ikonlar
   3. images/: Uygulama görselleri

3. Components/
   1. cards.tsx: İlan kartlarını temsil eder
   2. comment.tsx: Kullanıcı yorumları bileşeni
   3. filters.tsx: Arama filtre bileşeni
   4. noResults.tsx: Sonuç bulunamadığında gösterilen ekran
  
## Unfinished Parts/Feature Updates

1. android fix
2. like/save function
3. change profile details
4. add real estate details
5. comment and review
6. booking system (callender + billing for chosen days)
