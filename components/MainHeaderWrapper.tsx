// // components/MainHeaderWrapper.tsx
// import { hasRecentNews } from '@/lib/wordpress';
// import { MainHeader } from './header/SGCFHeader';

// // This is a Server Component - it fetches data on the server
// // No client-side API calls, no flashing badges
// export const MainHeaderWrapper = async () => {
//   let hasRecentNewsFlag = false;
  
//   try {
//     hasRecentNewsFlag = await hasRecentNews(7);
//   } catch (error) {
//     console.error('Failed to fetch recent news:', error);
//     // Default to false if WordPress is down
//     hasRecentNewsFlag = false;
//   }
  
//   return <MainHeader hasRecentNews={hasRecentNewsFlag} />;
// };