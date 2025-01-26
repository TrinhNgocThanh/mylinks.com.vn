import Link from 'next/link'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react'
import { useMediaQuery } from 'react-responsive'

const menuItems: {
  heading: string
  items: { name: string; href: string }[]
}[] = [
  {
    heading: 'Giới thiệu',
    items: [
      {
        name: 'Giới thiệu',
        href: '/about',
      },
      { name: 'Liên hệ chúng tôi', href: '/about#contact-us' },
      {
        name: 'Tính năng',
        href: '/docs/features',
      },
    ],
  },
  {
    heading: 'Tài nguyên',
    items: [
      {
        name: 'API Trình thông dịch mã',
        href: 'https://code.librechat.ai/pricing',
      },
      {
        name: 'Nhật ký thay đổi',
        href: '/changelog',
      },
      {
        name: 'Lộ trình',
        href: '/blog/2024-02-19_2024_roadmap',
      },
      {
        name: 'Demo',
        href: 'https://chat.librechat.ai/',
      },
      {
        name: 'Trạng thái',
        href: 'https://status.librechat.ai/',
      },
    ],
  },
  {
    heading: 'Tài liệu',
    items: [
      {
        name: 'Bắt đầu',
        href: '/docs',
      },
      {
        name: 'Cài đặt cục bộ',
        href: '/docs/local',
      },
      {
        name: 'Cài đặt từ xa',
        href: '/docs/remote',
      },
    ],
  },
  {
    heading: 'Blog',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Tác giả Blog', href: '/authors' },
    ],
  },
  {
    heading: 'Bản tin',
    items: [
      {
        name: 'Đăng ký',
        href: '/subscribe',
      },
      {
        name: 'Hủy đăng ký',
        href: '/unsubscribe',
      },
    ],
  },
  {
    heading: 'Pháp lý',
    items: [
      {
        name: 'Điều khoản dịch vụ',
        href: '/tos',
      },
      {
        name: 'Chính sách bảo mật',
        href: '/privacy',
      },
      {
        name: 'Chính sách cookie',
        href: '/cookie',
      },
    ],
  },
]

const FooterMenu = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  const socialLinks = [
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://github.librechat.ai/',
    },
    {
      title: 'Discord',
      icon: <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://discord.librechat.ai/',
    },
    {
      title: 'LinkedIn',
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://linkedin.librechat.ai/',
    },
    {
      title: 'Twitter',
      icon: <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://x.com/LibreChatAI',
    },
    {
      title: 'YouTube',
      icon: <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://www.youtube.com/@LibreChat',
    },
    {
      title: 'Email',
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'mailto:contact@librechat.ai',
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-6 text-base gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-2 font-mono font-bold text-primary">{menu.heading}</p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-tight hover:text-primary/80">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-center justify-between md:col-span-6">
          <div className="font-sans text-sm">© {new Date().getFullYear()} LibreChat</div>
          {!isMobile && <FloatingDock items={socialLinks} desktopClassName="ml-auto" />}
        </div>
      </div>
      {isMobile && <FloatingDock items={socialLinks} mobileClassName="mt-4" />}
    </div>
  )
}

export default FooterMenu
