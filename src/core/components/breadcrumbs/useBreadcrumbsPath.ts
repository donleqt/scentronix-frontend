import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function useBreadcrumbsPath() {
  const pathname = usePathname();
  const items = useMemo(() => {
    const pathnames = pathname.split('/').filter((x) => x);

    const breadcrumbItems = pathnames.map((value, index) => {
      const href = '/' + pathnames.slice(0, index + 1).join('/');
      const label = value.charAt(0).toUpperCase() + value.slice(1);

      return { label, href };
    });

    return [{ label: 'Home', href: '/' }, ...breadcrumbItems];
  }, [pathname]);

  return items.slice(0, 2);
}
