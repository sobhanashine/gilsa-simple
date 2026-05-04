import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import CompanySnapshot from '@/components/home/CompanySnapshot';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyGilsa from '@/components/home/WhyGilsa';
import ContactCTA from '@/components/home/ContactCTA';
import type {Locale} from '@/i18n/routing';

export default async function HomePage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return <><Hero locale={locale}/><StatsBar/><CompanySnapshot/><FeaturedProducts locale={locale}/><WhyGilsa/><ContactCTA/></>;
}
