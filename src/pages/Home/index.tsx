import { useLocation } from 'react-router-dom';
import { MainNavigation } from '@/features/app-navigation';
import { Layout } from '@/shared';

export const HomePage = function HomePage() {
  const { state } = useLocation();
  const hasAnimation = Boolean(state) && 'hasAnimation' in state;

  return (
    <Layout
      navigation={<MainNavigation />}
      hasAnimation={hasAnimation}
    >
      <div>
        <h1>Welcome!</h1>
      </div>
    </Layout>
  );
};
