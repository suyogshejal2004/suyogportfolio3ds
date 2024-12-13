import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Hi! I&apos;m Suyog Shejal, a passionate and driven Software Developer
            currently pursuing my BCA at Amrita Vishwa Vidyapeetham. I am eager
            to build and contribute to innovative projects in Android
            development, web development, and problem-solving.
            <br />
            Although I&apos;m at the beginning of my career, I&apos;m constantly learning
            and growing. I have a strong foundation in Kotlin, Jetpack Compose,
            ReactJS, and JavaScript, and I&apos;m always excited to explore new
            technologies. I am dedicated to improving my skills and gaining
            hands-on experience by collaborating on meaningful projects.
            <br />
            I am enthusiastic about taking on challenges that allow me to grow,
            learn, and push my limits. Whether it&apos;s coding, problem-solving, or
            building applications, I strive to provide quality work and
            contribute to projects that make a positive impact.
            <br />
            Feel free to reach out if you&apos;re interested in collaborating or
            have any questions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-pink-500"}
        >
          <p className="font-semibold w-full text-left text-3xl sm:text-6xl">
            Eager to Work with Clients{" "}
            <sub className="font-semibold text-lg sm:text-xl">and Grow</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-pink-500"}
        >
          <p className="font-semibold w-full text-left text-3xl sm:text-6xl">
            Eager to Learn{" "}
            <sub className="font-semibold text-lg sm:text-xl">and Grow</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=suyogshejal2004&size_weight=0.5&count_weight=0.5&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=suyogshejal2004&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=kotlin,eclipse,react,tailwind,js,html,css,github,git,vscode,androidstudio,idea,java,mysql,py,replit,sqlite,windows`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://streak-stats.demolab.com?user=suyogshejal2004&theme=transparent&hide_border=true&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/suyogshejal2004"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B"
              alt="Pinned Repo"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
