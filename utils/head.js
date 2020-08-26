export const head = (title, description, imageUrl) => {
  const metaDescription =
    description ||
    '学園祭実行委員会と参加企画との間のコミュニケーションを支援するオープンソースウェブシステム。参加団体向けウェブサイトの構築が可能。 — 「想い」を伝える。「想い」を集める。「想い」をつなげる。'

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
        content: '@AcappellaRank',
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
        content: imageUrl || '',
      },
    ],
  }
}
