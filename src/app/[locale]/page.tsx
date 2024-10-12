import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="mt-20">
      {/* 居中 */}
      <section className="flex items-center justify-center">
        <h1>{t("title")}</h1>
      </section>
    </main>
  );
}
