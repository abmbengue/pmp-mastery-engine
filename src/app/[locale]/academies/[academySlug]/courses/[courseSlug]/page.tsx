import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { findCourseBySlug, localizeCourse, localizeModule } from "@/data/repositories";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string; courseSlug: string }>;
}) {
  const { locale, academySlug, courseSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const course = await findCourseBySlug(academySlug, courseSlug);
  if (!course) notFound();

  const loc = locale as Locale;
  const { title, description } = localizeCourse(course, loc);

  return (
    <section data-testid="course-page">
      <Link href="/academies" className="mb-4 inline-block text-sm text-blue-600">
        ← {t("backToAcademies")}
      </Link>
      <h1 className="mb-2 text-2xl font-bold" data-testid="course-title">
        {title}
      </h1>
      <p className="mb-6 text-gray-600">{description}</p>
      <h2 className="mb-4 text-lg font-semibold">{t("modules")}</h2>
      <ul className="space-y-4">
        {course.modules.map((mod) => {
          const modLoc = localizeModule(mod, loc);
          const firstLesson = mod.lessons[0];
          return (
            <li key={mod.id} className="rounded-lg border bg-white p-4">
              <h3 className="font-medium">{modLoc.title}</h3>
              {firstLesson && (
                <Link
                  href={`/academies/${academySlug}/courses/${courseSlug}/modules/${mod.slug}/lessons/${firstLesson.slug}`}
                  className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                  data-testid={`lesson-link-${firstLesson.slug}`}
                >
                  {firstLesson.slug}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
