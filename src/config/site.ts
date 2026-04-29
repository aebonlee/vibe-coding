/**
 * 사이트 설정 파일 — 바이브코딩 마스터
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'vibe-coding',
  name: 'Vibe Coding Master',
  nameKo: '바이브코딩 마스터',
  description: '초급부터 고급까지 체계적 AI 코딩 커리큘럼 + 실전 프로젝트 9개 + 28일 부트캠프',
  url: 'https://vibe-coding.dreamitbiz.com',

  dbPrefix: 'vc_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'Vibe', className: 'brand-dream' },
      { text: 'Coding', className: 'brand-it' },
      { text: 'Master', className: 'brand-biz' }
    ]
  },

  themeColor: '#7C3AED',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#7C3AED' },
    { name: 'orange', color: '#C87200' },
  ],

  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'nav.curriculum',
      path: '/curriculum/beginner',
      activePath: '/curriculum',
      dropdown: [
        { path: '/curriculum/beginner', labelKey: 'nav.beginner' },
        { path: '/curriculum/intermediate', labelKey: 'nav.intermediate' },
        { path: '/curriculum/advanced', labelKey: 'nav.advanced' },
      ]
    },
    { path: '/markdown', labelKey: 'nav.markdown', activePath: '/markdown' },
    {
      labelKey: 'nav.projects',
      path: '/projects',
      activePath: '/projects',
      dropdown: [
        { path: '/projects/beginner', labelKey: 'nav.projectsBeginner' },
        { path: '/projects/intermediate', labelKey: 'nav.projectsIntermediate' },
        { path: '/projects/advanced', labelKey: 'nav.projectsAdvanced' },
      ]
    },
    { path: '/tools', labelKey: 'nav.tools', activePath: '/tools' },
    { path: '/bootcamp', labelKey: 'nav.bootcamp', activePath: '/bootcamp' },
    { path: '/community', labelKey: 'nav.community', activePath: '/community' },
  ],

  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/curriculum/beginner', labelKey: 'nav.curriculum' },
    { path: '/projects', labelKey: 'nav.projects' },
    { path: '/bootcamp', labelKey: 'nav.bootcamp' },
    { path: '/community', labelKey: 'nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '바이브코딩 입문', url: 'https://vibe.dreamitbiz.com' },
    { name: 'AI 프롬프트', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'Claude AI', url: 'https://claude.dreamitbiz.com' },
  ]
};

export default site;
