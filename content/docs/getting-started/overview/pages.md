---
title: 学園祭参加企画向けのお知らせを掲載・メール配信する
description: PortalDotsを使えば、学園祭に参加する企画向けのお知らせをオンライン上で掲載したり、メール配信したりすることができます。
subCategory: overview
priority: 2
---

## 概要
PortalDotsの「お知らせ」機能を利用することで、PortalDotsで構築した学園祭ウェブシステム上で「お知らせ」を掲載することができます。また、CRONが適切に設定されている場合、PortalDotsに登録されている全ユーザーに対して「お知らせ」をメール配信できます。

「企画情報管理」の「企画タグ」機能と併用することで、「お知らせ」を閲覧できるユーザーや、「お知らせ」のメール配信を受け取るユーザーを制限することもできます。

![お知らせのサンプル](/docs-images/getting-started/overview/pages/pages.png)

<docs-alert type="info">
  CRONの設定方法はサーバーによって異なります。詳細は<nuxt-link to="/docs/setup/">セットアップ方法</nuxt-link>をご覧ください。
</docs-alert>

## 「お知らせ」を作成する
1. 「スタッフモード」を開きます。
1. メニューから「お知らせ管理」を選びます。
1. 「新規お知らせ」を選びます。
1. 以下の表に記載されている入力欄が表示されます。入力欄に入力し終わったら「保存」を選びます。

| 入力項目名 | 説明 |
| --- | --- |
| タイトル | 作成する「お知らせ」のタイトルを入力します。「お知らせ」をメール配信する場合は、このタイトルがメールの件名になります。 |
| 本文 | 作成する「お知らせ」の本文を入力します。 |
| お知らせを閲覧可能なユーザー | （後述） |
| 公開設定 | 「公開」にチェックを入れるとお知らせが公開されます。「非公開」にチェックを入れるとお知らせは公開されません。 |
| お知らせを固定表示 | （後述） |
| 保存後にこのお知らせを「閲覧可能なユーザー」で指定したユーザー全員にメール配信 | 「お知らせ」を保存したタイミングで「お知らせ」のメール配信を行いたい場合、チェックを入れてください。 |
| スタッフ用メモ | 一般ユーザーには公開されないスタッフ用のメモを入力できます。 |

## 「お知らせを閲覧可能なユーザー」について
PortalDotsに登録されているユーザー全員に対して公開する必要がなく、一部のユーザーにだけ公開したい「お知らせ」がある場合、「お知らせを閲覧可能なユーザー」機能を使って「お知らせ」を閲覧できるユーザーを制限できます。

例えば、「講義棟教室の電源について」という「お知らせ」を、講義棟を利用する企画のメンバーに対してだけ公開したい場合、以下のように設定してください。

1. 予め「企画情報管理」で、講義棟を利用する企画の「企画タグ」入力欄に「**講義棟**」と入力しておく。
1. 「お知らせ」作成画面にある「お知らせを閲覧可能なユーザー」入力欄に「**講義棟**」と入力する。
1. 「お知らせ」を保存する。

## 「お知らせを固定表示」について
![固定表示されたお知らせのサンプル](/docs-images/getting-started/overview/pages/pinned-page.png)

「お知らせを固定表示」にチェックを入れると、その「お知らせ」はホームの一番上に全文表示されます（上図）。また、「お知らせ」一覧では非表示になります。

「お知らせを閲覧可能なユーザー」と「お知らせを固定表示」の両方を設定した場合、「お知らせを閲覧可能なユーザー」としてログインしている場合のみ、ホームの一番上に「お知らせ」が全文表示されます。