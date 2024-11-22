import { Window } from '../components/Window';
import { DesktopView } from '../components/desktop/DesktopView';
import { Footer } from '../components/desktop/Footer';
import { ProfileCard } from '../components/dotgpt/ProfileCard';

export default function DesktopPage() {
  return (
    <section className='bg-[#ddd8df] p-[24px] gap-5 flex flex-col h-screen press'>
      <DesktopView>
        <Window name='dad'>
          <span>POrfa anda</span>
        </Window>
        <ProfileCard content='ddddddddddddddddddddddddddddddddd djioajdoiajoidjoajdai sjodjaojdajdioajdojaid ijdoasjdoaijdiajiodj' />
      </DesktopView>
      <Footer />
    </section>
  );
}
