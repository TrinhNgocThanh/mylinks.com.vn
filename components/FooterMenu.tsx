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
    ],
  },
  {
    heading: 'AI & Ứng dụng',
    items: [
      {
        name: 'AI API Keys',
        href: 'https://api.mylinks.com.vn/detail/',
      },
      {
        name: 'Ứng dụng AI-Chat',
        href: 'https://aichat.mylinks.com.vn/',
      },
      {
        name: 'LobeChat',
        href: 'https://chat.mylinks.com.vn/',
      },
      {
        name: 'NextChat',
        href: 'https://next.mylinks.com.vn/',
      },
      {
        name: 'AI Chrome Extension',
        href: '#',
      },
    ],
  },
  {
    heading: 'Giải pháp khách hàng',
    items: [
      {
        name: 'Giữ chân khách hàng ViVi',
        href: '/crs',
      },
      {
        name: 'Kênh bán D2C',
        href: '/d2c',
      },
      {
        name: 'Sale Tracking',
        href: '/sale_tracking',
      },
    ],
  },
  {
    heading: 'Blog & AI',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'ChatGPT', href: 'https://chatgpt.com/' },
      { name: 'lLama /Meta AI', href: 'https://www.meta.ai/' },
      { name: 'Gemini', href: 'https://gemini.google.com/' },
      { name: 'Claude', href: 'https://claude.ai/' },
      { name: 'xAI', href: 'https://x.com/i/grok/' },
      { name: 'Thư viện Prompt', href: 'https://prompts.chat/' },
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
    heading: 'Chính sách',
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
      href: '#',
    },
    {
      title: 'Discord',
      icon: <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'LinkedIn',
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      // href: 'https://linkedin.librechat.ai/',
      href: '#',
    },
    {
      title: 'Twitter',
      icon: <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      // href: 'https://x.com/LibreChatAI',
      href: '#',
    },
    {
      title: 'YouTube',
      icon: <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      // href: 'https://www.youtube.com/@LibreChat',
      href: '#',
    },
    {
      title: 'Email',
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'mailto:contact@mylinks.com.vn',
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
          <div className="font-sans text-sm">© {new Date().getFullYear()} MyLinks Co., Ltd.</div>
          {!isMobile && <FloatingDock items={socialLinks} desktopClassName="ml-auto" />}
        </div>
      </div>
      {isMobile && <FloatingDock items={socialLinks} mobileClassName="mt-4" />}
    </div>
  )
}

export default FooterMenu
