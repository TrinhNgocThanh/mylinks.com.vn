import { ReactNode } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { GitFork, BrainCog, Code, Bot, Search, Image as ImageIcon, Terminal } from 'lucide-react'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import CodeInterpreter from './img/code_interpreter.gif'
import { HomeSection } from './components/HomeSection'
import ArtifactsLight from './img/artifacts_light.png'
import ArtifactsDark from './img/artifacts_dark.png'
import AgentsLight from './img/agents_light.png'
import AgentsDark from './img/agents_dark.png'
import { Header } from '../Header'

const BentoBgImage = ({
  imgLight,
  imgDark,
  alt,
}: {
  imgLight: StaticImageData
  imgDark: StaticImageData
  alt: string
}) => (
  <>
    <Image
      className="opacity-60 top-0 right-0 dark:hidden hidden md:block"
      style={{
        objectFit: 'contain',
        objectPosition: 'top right',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 15%, rgba(0,0,0,1))',
      }}
      src={imgLight}
      fill
      alt={alt}
      sizes="(min-width: 1024px) 33vw, 100vw"
    />
    <Image
      className="opacity-60 top-0 right-0 hidden dark:md:block"
      style={{
        objectFit: 'contain',
        objectPosition: 'top right',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 15%, rgba(0,0,0,1))',
      }}
      src={imgDark}
      fill
      alt={alt}
      sizes="(min-width: 1024px) 33vw, 100vw"
    />
  </>
)

type Feature = {
  Icon: React.ComponentType
  name: string
  description: string
  href: string
  cta: string
  background: ReactNode | null
  className: string
}

const features: Feature[] = [
  {
    Icon: Bot,
    name: 'AI API Key Providers',
    description: 'Các tác nhân nâng cao với xử lý tệp, diễn giải mã và hành động API',
    href: '/pricing',
    cta: 'Xem thêm!',
    background: <BentoBgImage imgLight={AgentsLight} imgDark={AgentsDark} alt="Agents" />,
    className: 'md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-2',
  },
  {
    Icon: Terminal,
    name: 'Giữ chân khách hàng',
    description:
      'Thực thi mã trong nhiều ngôn ngữ một cách an toàn qua API mà không cần thiết lập - Python, JavaScript, TypeScript, Go và nhiều hơn nữa',
    href: '/crs',
    cta: 'Xem thêm!',
    background: (
      <BentoBgImage imgLight={CodeInterpreter} imgDark={CodeInterpreter} alt="Artifacts" />
    ),
    className: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3',
  },
  {
    Icon: BrainCog,
    name: 'Khai thác tiềm năng khách hàng',
    description:
      'Bằng cách phát hiện những lợi thế đặc thù của doanh nqhiệp và kết hợp với giải pháp ứng dụng phù hợp trong kỷ nguyên AI và lấy khách hàng làm trọng tâm',
    href: '/d2c',
    cta: 'Xem thêm!',
    background: null,
    className: 'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4',
  },
  {
    Icon: Code,
    name: 'Sử dụng OpenAI, Gemini, và nhiều hơn nữa',
    description:
      'Sử dụng các mô hình AI chuyên nghiệp trong chỉ 1 ứng dụng để nâng cao hiệu suất và tăng cường khả năng cạnh tranh',
    href: '/pricing',
    cta: 'Xem thêm!',
    background: <BentoBgImage imgLight={ArtifactsLight} imgDark={ArtifactsDark} alt="Artifacts" />,
    className: 'md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2',
  },
  {
    Icon: ImageIcon,
    name: 'Ứng dụng AI Agent',
    description:
      'Cung cấp dịch vụ AI Agent để tạo ra các ứng dụng AI một cách nhanh chóng và dễ dàng',
    href: '/pricing',
    cta: 'Xem thêm!',
    background: null,
    className: 'md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-3',
  },
  {
    Icon: GitFork,
    name: 'Dịch vụ triển khai cao cấp',
    description: 'Tư vấn và triển khai Self-Hosting giải pháp ứng dụng cho doanh nghiệp của bạn',
    href: '/docs/features/fork',
    cta: 'Xem thêm!',
    background: null,
    className: 'md:col-start-3 md:col-end-3 md:row-start-3 md:row-end-4',
  },
  {
    Icon: Search,
    name: 'CRM AI',
    description:
      'CRM & AI giúp doanh nghiệp tối ưu hóa quy trình bán hàng và tăng cường khả năng cạnh tranh',
    href: '/docs/configuration/meilisearch',
    cta: 'Xem thêm!',
    background: null,
    className: 'md:col-start-3 md:col-end-3 md:row-start-3 md:row-end-4',
  },
]

export default function Features() {
  return (
    <HomeSection>
      <Header
        title="Mở khóa tiềm năng"
        description="Tiềm năng sẵn có trong mọi doanh nghiệp đó là tệp khách hàng hiện hữu. Hãy khai thác tiềm năng này, với giải pháp Giữ chân khách hàng ViVi của chúng tôi."
        button={{ href: '#', text: 'Xem chi tiết' }}
      />
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </HomeSection>
  )
}
