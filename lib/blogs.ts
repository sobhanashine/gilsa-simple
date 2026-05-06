export type Blog = {
  id: string;
  slug: string;
  title_en: string;
  title_fa: string;
  title_ar: string;
  excerpt_en: string;
  excerpt_fa: string;
  excerpt_ar: string;
  content_en: string;
  content_fa: string;
  content_ar: string;
  image: string | null;
  thumbnail: string | null;
  published_at: string;
};

export const blogs: Blog[] = [
  {
    id: '1',
    slug: 'smart-home-trends-2025',
    title_en: 'Smart Home Trends in 2025',
    title_fa: 'روندهای خانه هوشمند در ۲۰۲۵',
    title_ar: 'اتجاهات المنزل الذكي في 2025',
    excerpt_en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    excerpt_fa: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    excerpt_ar: 'لوريم إيبسوم هو نص وهمي يستخدم في صناعة الطباعة والتنضيد.',
    content_en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    content_fa: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.\n\nبرای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.\n\nتا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
    content_ar: 'لوريم إيبسوم هو نص وهمي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم ولا يزال المعيار للنص الوهمي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي.\n\nلم يتوقف هذا النص على البقاء خمسة قرون فحسب، بل وأيضاً الانتقال إلى التنضيد الإلكتروني، وبقي دون تغيير جوهري. انتشر بشكل كبير في ستينيات القرن الماضي.\n\nمع إصدار أوراق ليتراسيت التي تحتوي على مقاطع من لوريم إيبسوم، ومؤخراً مع برامج النشر المكتبي مثل ألدوس بيج ميكر التي تحتوي على إصدارات من لوريم إيبسوم.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%231a7a80;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="630" fill="url(%23g1)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="72" font-weight="bold"%3ESmart Home 2025%3C/text%3E%3C/svg%3E',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Cdefs%3E%3ClinearGradient id="g1t" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%231a7a80;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g1t)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="60" font-weight="bold"%3EThumb 1%3C/text%3E%3C/svg%3E',
    published_at: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    slug: 'touch-switch-installation-guide',
    title_en: 'Touch Switch Installation Guide',
    title_fa: 'راهنمای نصب کلید لمسی',
    title_ar: 'دليل تركيب مفاتيح اللمس',
    excerpt_en: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    excerpt_fa: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    excerpt_ar: 'كان لوريم إيبسوم ولا يزال المعيار للنص الوهمي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة.',
    content_en: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    content_fa: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\n\nکتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\n\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.',
    content_ar: 'كان لوريم إيبسوم ولا يزال المعيار للنص الوهمي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.\n\nخمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيات هذا القرن مع إصدار رقائق ليتراسيت.\n\nالبلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر المكتبي مثل ألدوس بايج مايكر.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%232fc2cb;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="630" fill="url(%23g2)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="64" font-weight="bold"%3EInstallation Guide%3C/text%3E%3C/svg%3E',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Cdefs%3E%3ClinearGradient id="g2t" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%232fc2cb;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g2t)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="60" font-weight="bold"%3EThumb 2%3C/text%3E%3C/svg%3E',
    published_at: '2025-02-10T14:30:00Z'
  },
  {
    id: '3',
    slug: 'energy-efficiency-smart-switches',
    title_en: 'Energy Efficiency with Smart Switches',
    title_fa: 'بهره‌وری انرژی با کلیدهای هوشمند',
    title_ar: 'كفاءة الطاقة مع المفاتيح الذكية',
    excerpt_en: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    excerpt_fa: 'کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.',
    excerpt_ar: 'انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق ليتراسيت التي تحتوي على مقاطع.',
    content_en: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    content_fa: 'کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\n\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n\nلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    content_ar: 'انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق ليتراسيت التي تحتوي على مقاطع من لوريم إيبسوم، ومؤخراً مع برامج النشر المكتبي مثل ألدوس بيج ميكر التي تحتوي على إصدارات من لوريم إيبسوم.\n\nهنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.\n\nإن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%237FE3EA;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="630" fill="url(%23g3)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="68" font-weight="bold"%3EEnergy Efficiency%3C/text%3E%3C/svg%3E',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Cdefs%3E%3ClinearGradient id="g3t" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%237FE3EA;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g3t)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="60" font-weight="bold"%3EThumb 3%3C/text%3E%3C/svg%3E',
    published_at: '2025-03-05T09:15:00Z'
  },
  {
    id: '4',
    slug: 'gilsa-warranty-support',
    title_en: 'Understanding Gilsa Warranty and Support',
    title_fa: 'درک گارانتی و پشتیبانی گیلسا',
    title_ar: 'فهم ضمان ودعم جيلسا',
    excerpt_en: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    excerpt_fa: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.',
    excerpt_ar: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم ولكن الغالبية تم تعديلها بشكل ما.',
    content_en: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.\n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    content_fa: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n\nلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.\n\nو برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.',
    content_ar: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما.\n\nعليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات.\n\nبما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من مئتي كلمة لا تينية، مضاف إليها مجموعة من الجمل النموذجية.',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Cdefs%3E%3ClinearGradient id="g4" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231a7a80;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="630" fill="url(%23g4)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="72" font-weight="bold"%3EWarranty %26 Support%3C/text%3E%3C/svg%3E',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Cdefs%3E%3ClinearGradient id="g4t" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231a7a80;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%2325AAB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g4t)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="60" font-weight="bold"%3EThumb 4%3C/text%3E%3C/svg%3E',
    published_at: '2025-03-20T16:45:00Z'
  }
];

export function getBlogs(): Blog[] {
  return blogs;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
