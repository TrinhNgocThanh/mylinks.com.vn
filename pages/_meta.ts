export default {
  index: {
    type: 'page',
    title: 'API Mylinks',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  about: {
    title: 'Về chúng tôi',
    type: 'page',
    theme: {
      timestamp: false,
    },
  },
  changelog: {
    type: 'page',
    title: 'Giới thiệu',
    display: 'hidden',
    theme: {
      layout: 'full',
    },
  },
  code_interpreter: {
    type: 'page',
    title: '✨ API Mylinks.AI',
    href: 'https://api.mylinks.com.vn',
  },
  docs: {
    type: 'page',
    title: 'Tài liệu',
  },
  blog: {
    title: 'Blog',
    type: 'page',
    theme: {
      layout: 'full',
    },
  },
  authors: {
    title: 'Tác giả',
    type: 'folder',
    theme: {
      toc: false,
      sidebar: false,
      pagination: true,
      layout: 'default',
      breadcrumb: false,
      timestamp: false,
    },
  },
  demo: {
    type: 'page',
    title: 'API Mylinks',
    href: 'https://api.mylinks.com.vn/',
    // display: 'hidden',
  },

  pricing: {
    title: 'Giá cả',
    display: 'hidden',
    type: 'page',
    theme: {
      layout: 'full',
    },
  },
  tos: {
    title: 'Điều khoản dịch vụ',
    type: 'page',
    display: 'hidden',
  },
  privacy: {
    title: 'Chính sách bảo mật',
    type: 'page',
    display: 'hidden',
  },
  cookie: {
    title: 'Chính sách cookie',
    type: 'page',
    display: 'hidden',
  },

  features: {
    title: 'Tính năng',
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
    },
  },
  subscribe: {
    title: 'Đăng ký',
    type: 'page',
    display: 'hidden',
  },
  unsubscribe: {
    title: 'Hủy đăng ký',
    type: 'page',
    display: 'hidden',
  },
  '404': {
    type: 'page',
    theme: {
      typesetting: 'article',
      timestamp: false,
    },
  },
  toolkit: 'Bộ công cụ',
  README: {
    title: 'readme.md',
    type: 'page',
    display: 'hidden',
  },
}
