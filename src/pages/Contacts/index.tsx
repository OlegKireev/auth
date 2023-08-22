import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const ContactsPage = function ContactsPage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <h1>Contacts</h1>
    </Page>
  );
};
