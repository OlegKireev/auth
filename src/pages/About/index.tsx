import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const AboutPage = function AboutPage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <h1>About</h1>
    </Page>
  );
};
