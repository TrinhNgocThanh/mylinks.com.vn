import { Check, Plus, Minus, X } from 'lucide-react'
import { Disclosure } from '@headlessui/react'
import { BorderBeam } from '../magicui/border-beam'
import Link from 'next/link'
import { Header } from '../Header'
import { Button } from '../ui/button'
import { HomeSection } from './components/HomeSection'
import { cn } from '@/lib/utils'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: 'https://api.mylinks.com.vn/detail/',
    featured: false,
    description: 'Lý tưởng cho các nhóm nhỏ và dự án cá nhân.',
    price: '$1K',
    mainFeatures: [
      'Công cụ AI Chat',
      'AI Chat',
      'NextChat',
      'LobeChat',
      'Chrome/Edge Extension',
      'Tạo API AI Key riêng',
    ],
    cta: 'Đăng ký',
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: 'https://api.mylinks.com.vn/detail/',
    featured: true,
    description: 'Dành cho các nhóm và doanh nghiệp đang phát triển.',
    price: '$1M',
    mainFeatures: [
      'Công cụ AI Chat',
      'AI Chat',
      'NextChat',
      'LobeChat',
      'Chrome/Edge Extension',
      'Tạo API AI Key riêng',
      'Hỗ trợ chuyên dụng',
    ],
    cta: 'Đăng ký',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact-sales',
    featured: false,
    price: 'Liên hệ',
    description: 'Giải pháp tùy chỉnh cho các tổ chức lớn.',
    mainFeatures: ['Vai trò và quyền tùy chỉnh', 'Bảo mật cấp doanh nghiệp', 'Hỗ trợ 24/7'],
    cta: 'Liên hệ',
  },
] as const

const sections = [
  {
    name: 'Kiểm soát truy cập',
    features: [
      {
        name: 'Truy cập dựa trên vai trò',
        tiers: {
          Starter: true,
          Professional: true,
          Enterprise: true,
        },
      },
      {
        name: 'Quyền tùy chỉnh',
        tiers: {
          Starter: false,
          Professional: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: 'Phân tích & Báo cáo',
    features: [
      {
        name: 'Phân tích cơ bản',
        tiers: {
          Starter: true,
          Professional: false,
          Enterprise: true,
        },
      },
      {
        name: 'Phân tích nâng cao',
        tiers: {
          Starter: false,
          Professional: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: 'Tích hợp',
    features: [
      {
        name: 'Tích hợp với các công cụ bên ngoài',
        tiers: {
          Starter: true,
          Professional: true,
          Enterprise: true,
        },
      },
      {
        name: 'API tùy chỉnh',
        tiers: {
          Starter: true,
          Professional: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: 'Hỗ trợ & Bảo trì',
    features: [
      {
        name: 'Hỗ trợ cộng đồng',
        tiers: {
          Starter: true,
          Professional: true,
          Enterprise: false,
        },
      },
      {
        name: 'Hỗ trợ chuyên dụng',
        tiers: {
          Starter: false,
          Professional: true,
          Enterprise: true,
        },
      },
      {
        name: 'Hỗ trợ 24/7',
        tiers: {
          Starter: false,
          Professional: false,
          Enterprise: true,
        },
      },
    ],
  },
]

export default function Pricing({ isPricingPage = false }: { isPricingPage?: boolean }) {
  return (
    <HomeSection id="pricing" className={cn(isPricingPage && 'px-0 sm:px-0')}>
      <div className="isolate overflow-hidden">
        <div className="flow-root pb-16 lg:pb-0">
          <div className="mx-auto max-w-7xl">
            <Header
              title="AI API Keys duy nhất cho các dự án AI mọi quy mô"
              description="Bạn không cần phải lo lắng về chi phí về dịch vụ API Keys trực tiếp nữa. Hãy để chúng tôi lo cho bạn, chỉ một Key cho mọi mô hình AI."
              h="h1"
            />

            <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div
                className="hidden lg:absolute lg:inset-x-px lg:bottom-4 lg:top-4 lg:block lg:rounded lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                aria-hidden="true"
              />
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'z-10 bg-slate-100 shadow-xl ring-1 ring-gray-900/10'
                      : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                    'relative rounded',
                  )}
                >
                  {tier.featured && <BorderBeam borderWidth={2} />}
                  <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.featured ? 'text-gray-900' : 'text-white',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className="mt-2 flex items-center gap-x-4">
                        <p
                          className={classNames(
                            tier.featured ? 'text-gray-900' : 'text-white',
                            'text-4xl font-bold tracking-tight',
                          )}
                        >
                          {tier.price}
                        </p>
                      </div>
                      <Button
                        asChild
                        className="z-10"
                        variant={tier.featured ? 'cta' : 'secondary'}
                      >
                        <Link href={tier.href}>{tier.cta}</Link>
                      </Button>
                    </div>
                    <div className="mt-8 flow-root sm:mt-10">
                      <ul
                        role="list"
                        className={classNames(
                          tier.featured
                            ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                            : 'divide-white/5 border-white/5 text-white',
                          '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0',
                        )}
                      >
                        {tier.mainFeatures.map((mainFeature) => (
                          <li key={mainFeature} className="flex gap-x-3 py-2">
                            <Check
                              className={classNames(
                                tier.featured ? 'text-indigo-600' : 'text-gray-500',
                                'h-6 w-5 flex-none',
                              )}
                              aria-hidden="true"
                            />
                            {mainFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPricingPage ? (
          <>
            <div className="relative">
              <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                {/* Feature comparison (up to lg) */}
                <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                  <h2 id="mobile-comparison-heading" className="sr-only">
                    So sánh tính năng
                  </h2>

                  <div className="mx-auto max-w-2xl space-y-16">
                    {tiers.map((tier) => (
                      <div key={tier.id} className="border-t border-gray-900/10">
                        <div
                          className={classNames(
                            tier.featured ? 'border-indigo-600' : 'border-transparent',
                            '-mt-px w-72 border-t-2 pt-10 md:w-80',
                          )}
                        >
                          <h3
                            className={classNames(
                              tier.featured
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-primary',
                              'text-sm font-semibold leading-6',
                            )}
                          >
                            {tier.name}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-primary/60">
                            {tier.description}
                          </p>
                        </div>

                        <div className="mt-10 space-y-10">
                          {sections.map((section) => (
                            <div key={section.name}>
                              <h4 className="text-sm font-semibold leading-6 text-primary">
                                {section.name}
                              </h4>
                              <div className="relative mt-6">
                                {/* Fake card background */}
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-y-0 right-0 hidden w-1/2 rounded bg-white dark:bg-gray-800/80 shadow-sm sm:block"
                                />

                                <div
                                  className={classNames(
                                    tier.featured
                                      ? 'ring-2 ring-indigo-600'
                                      : 'ring-1 ring-gray-900/10',
                                    'relative rounded bg-white dark:bg-gray-800/80 shadow-sm sm:rounded-none dark:sm:bg-transparent sm:shadow-none sm:ring-0',
                                  )}
                                >
                                  <dl className="divide-y divide-gray-200 text-sm leading-6">
                                    {section.features.map((feature) => (
                                      <div
                                        key={feature.name}
                                        className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                      >
                                        <dt className="pr-4 text-primary/60">{feature.name}</dt>
                                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                          {typeof feature.tiers[tier.name] === 'string' ? (
                                            <span
                                              className={
                                                tier.featured
                                                  ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                                                  : 'text-primary'
                                              }
                                            >
                                              {feature.tiers[tier.name]}
                                            </span>
                                          ) : (
                                            <>
                                              {feature.tiers[tier.name] === true ? (
                                                <Check
                                                  className="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                                  aria-hidden="true"
                                                />
                                              ) : (
                                                <X
                                                  className="mx-auto h-5 w-5 text-gray-400"
                                                  aria-hidden="true"
                                                />
                                              )}

                                              <span className="sr-only">
                                                {feature.tiers[tier.name] === true ? 'Có' : 'Không'}
                                              </span>
                                            </>
                                          )}
                                        </dd>
                                      </div>
                                    ))}
                                  </dl>
                                </div>

                                {/* Fake card border */}
                                <div
                                  aria-hidden="true"
                                  className={classNames(
                                    tier.featured
                                      ? 'ring-2 ring-indigo-600'
                                      : 'ring-1 ring-gray-900/10',
                                    'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded sm:block',
                                  )}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Feature comparison (lg+) */}
                <section aria-labelledby="comparison-heading" className="hidden lg:block">
                  <h2 id="comparison-heading" className="sr-only">
                    So sánh tính năng
                  </h2>

                  <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                    {tiers.map((tier) => (
                      <div key={tier.id} aria-hidden="true" className="-mt-px">
                        <div
                          className={classNames(
                            tier.featured ? 'border-indigo-600' : 'border-transparent',
                            'border-t-2 pt-10',
                          )}
                        >
                          <p
                            className={classNames(
                              tier.featured
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-primary',
                              'text-sm font-semibold leading-6',
                            )}
                          >
                            {tier.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-primary/70">
                            {tier.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="-mt-6 space-y-16">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h3 className="text-sm font-semibold leading-6 text-primary">
                          {section.name}
                        </h3>
                        <div className="relative -mx-8 mt-10">
                          {/* Fake card backgrounds */}
                          <div
                            className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                            aria-hidden="true"
                          >
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                          </div>

                          <table className="relative w-full border-separate border-spacing-x-8">
                            <thead>
                              <tr className="text-left">
                                <th scope="col">
                                  <span className="sr-only">Tính năng</span>
                                </th>
                                {tiers.map((tier) => (
                                  <th key={tier.id} scope="col">
                                    <span className="sr-only">{tier.name} tier</span>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.features.map((feature, featureIdx) => (
                                <tr key={feature.name}>
                                  <th
                                    scope="row"
                                    className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-primary"
                                  >
                                    {feature.name}
                                    {featureIdx === section.features.length - 1 ? null : (
                                      <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                                    )}
                                  </th>
                                  {tiers.map((tier) => (
                                    <td
                                      key={tier.id}
                                      className="relative w-1/4 px-4 py-0 text-center"
                                    >
                                      <span className="relative h-full w-full py-3">
                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                          <span
                                            className={classNames(
                                              tier.featured
                                                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                                                : 'text-primary',
                                              'text-sm leading-6',
                                            )}
                                          >
                                            {feature.tiers[tier.name]}
                                          </span>
                                        ) : (
                                          <>
                                            {feature.tiers[tier.name] === true ? (
                                              <Check
                                                className="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                                aria-hidden="true"
                                              />
                                            ) : (
                                              <X
                                                className="mx-auto h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            )}

                                            <span className="sr-only">
                                              {feature.tiers[tier.name] === true ? 'Có' : 'Không'}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          {/* Fake card borders */}
                          <div
                            className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                            aria-hidden="true"
                          >
                            {tiers.map((tier) => (
                              <div
                                key={tier.id}
                                className={classNames(
                                  tier.featured
                                    ? 'ring-2 ring-indigo-600'
                                    : 'ring-1 ring-gray-900/10',
                                  'rounded',
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <PricingFAQ />
          </>
        ) : (
          <>
            <div className="text-center mt-10">
              Để so sánh chi tiết và Câu hỏi thường gặp, hãy xem{' '}
              <Link href="/pricing" className="underline">
                trang giá cả
              </Link>
              .
            </div>
          </>
        )}
      </div>
    </HomeSection>
  )
}

const faqs = [
  {
    question: 'Dịch vụ AI Key Mylinks là gì?',
    answer:
      'Dịch vụ AI Key Mylinks là một công cụ mạnh mẽ được thiết kế để cung cấp cho quản trị viên khả năng kiểm soát và quản lý toàn diện đối với phiên bản MyLinks của họ. Nó cho phép bạn cấu hình vai trò, quản lý người dùng, truy cập phân tích nâng cao và nhiều hơn nữa.',
  },
  {
    question: 'Làm thế nào để tôi có thể truy cập Bảng điều khiển quản trị?',
    answer:
      'Để truy cập Dịch vụ AI Key Mylinks , bạn sẽ cần đăng ký gói trả phí bao gồm tính năng này. Sau khi đăng ký, bạn sẽ nhận được thông tin đăng nhập và hướng dẫn về cách truy cập và sử dụng Bảng điều khiển quản trị.',
  },
  {
    question: 'Những tính năng nào có sẵn trong Bảng điều khiển quản trị?',
    answer:
      'Dịch vụ AI Key Mylinks cung cấp các tính năng như kiểm soát truy cập dựa trên vai trò, cấu hình dự án, quản lý người dùng với dữ liệu thời gian thực, phân tích, tích hợp với các công cụ bên ngoài và nhiều hơn nữa. Nó là một công cụ toàn diện để quản lý môi trường MyLinks của bạn một cách hiệu quả.',
  },
  {
    question: 'Dịch vụ AI Key Mylinks có được bao gồm trong gói miễn phí không?',
    answer:
      'Không, Dịch vụ AI Key Mylinks là một tính năng cao cấp có sẵn với các gói trả phí. Gói miễn phí của MyLinks bao gồm các chức năng cốt lõi nhưng không cấp quyền truy cập vào các khả năng nâng cao được cung cấp bởi Bảng điều khiển quản trị.',
  },
  {
    question: 'Tôi có thể tùy chỉnh Dịch vụ AI Key Mylinks theo nhu cầu của mình không?',
    answer:
      'Có, Dịch vụ AI Key Mylinks cho phép tùy chỉnh và cấu hình dựa trên yêu cầu cụ thể của bạn. Bạn có thể thiết lập các vai trò tùy chỉnh, cấu hình cài đặt dự án, tích hợp với các dịch vụ bên ngoài và điều chỉnh bảng điều khiển để phù hợp với quy trình làm việc của bạn.',
  },
]

export function PricingFAQ() {
  return (
    <div id="faq">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-primary/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
            Câu hỏi thường gặp
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-primary/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-primary">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <Minus className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Plus className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p
                        className="text-base leading-7 text-primary/70"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
