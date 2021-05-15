export const head = (title, description, imageUrl) => {
  const metaDescription =
    description ||
    'PortalDots〈ポータルドット〉は、ログイン機能や参加登録機能、申請フォーム機能を備えた学園祭運営支援ウェブシステムです。オープンソースなので、それぞれの学園祭の運営方法に合わせてカスタマイズすることができます。'

  return {
    title: title ? `${title} - PortalDots` : 'PortalDots〈ポータルドット〉',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: metaDescription,
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: imageUrl ? 'summary_large_image' : 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@PortalDots',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title || 'PortalDots〈ポータルドット〉',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: metaDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          imageUrl ||
          'https://repository-images.githubusercontent.com/245637809/6a04c400-a6da-11ea-89d2-c7f6a00a64c0',
      },
    ],
  }
}
