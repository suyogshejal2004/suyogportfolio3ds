import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Hi, I’m Baliram Shejal, a passionate and result-driven Software Developer based in Pune, Maharashtra. With over 2.4 years of experience, I specialize in crafting intuitive, high-performance mobile and web applications that bridge technology and user needs.

From developing feature-rich React Native apps to optimizing Android experiences with Jetpack Compose, I bring expertise in building scalable and innovative solutions. My journey includes working on groundbreaking projects like WhatsApp Auto Printing Application, KompassHR, and OceanFM, blending creativity with functionality to exceed expectations.

I’m proficient in TypeScript, Kotlin, and JavaScript, with a strong command of frameworks such as React, Redux Toolkit, and Node.js. My focus on state-of-the-art tools like Firebase, SQLite, and MMKV Storage ensures efficient and reliable performance for every project.

Beyond technical skills, I value seamless user experiences, proactive problem-solving, and clean, maintainable code. Whether it’s designing modern UIs, integrating APIs, or managing notifications and printer systems, I thrive on delivering impactful solutions that drive results.

When I’m not coding, you can find me exploring fitness routines or creating innovative solutions to simplify everyday challenges. Let’s create something amazing together!.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
           className="w-full h-auto"
           src={`https://github-readme-stats.vercel.app/api/top-langs/?username=balram-01&size_weight=0.5&count_weight=0.5&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
           alt="CodeBucks"
           loading="lazy"
           
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
           
           className="w-full h-auto"
           src="https://github-readme-stats.vercel.app/api?username=balram-01&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_p&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
           alt="GitHub Stats for Balram"
           loading="lazy"
         
         
        
         
           
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,html,css,react,redux,typescript,nodejs,java,kotlin,git,github,androidstudio,sqlite,firebase,materialui,xcode,razorpay`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <img
  className="w-full h-auto"
  src="https://streak-stats.demolab.com/?user=balram-01&currStreakNum=2FD3EB&fire=pink&sideLabels=F00&date_format=[Y.]n.j&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
  alt="GitHub Streak Stats for Balram"
  loading="lazy"
/>

        </ItemLayout>



        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/balram-01"
            target="_blank"
            className="w-full"
          >
            <img
             className="w-full h-auto"
             src="https://github-readme-stats.vercel.app/api/top-langs/?username=balram-01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
             alt="Top Languages for Balram"
             loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
