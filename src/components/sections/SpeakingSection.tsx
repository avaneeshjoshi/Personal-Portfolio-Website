import SectionHeader from "../SectionHeader";

const SpeakingSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-solid fa-trophy"></i>}
        title="Skills"
        linkText=""
        linkHref=""
      />
      <div className="text-sm text-muted-foreground space-y-4">
        <div>
          <p className="card-title mb-2">Programming Languages</p>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white" alt="SQL" />
            <img src="https://img.shields.io/badge/MATLAB-0076A8?style=flat-square&logo=mathworks&logoColor=white" alt="MATLAB" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
          </div>
        </div>
        <div>
          <p className="card-title mb-2">Frameworks/Libraries</p>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
            <img src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React Native" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
            <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
            <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
            <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
            <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangChain" />
            <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" alt="TensorFlow" />
          </div>
        </div>
        <div>
          <p className="card-title mb-2">Developer Tools</p>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
            <img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" alt="VS Code" />
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" alt="Figma" />
            <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white" alt="Notion" />
            <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
            <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" alt="Slack" />
            <img src="https://img.shields.io/badge/RESTful_API-FF6F00?style=flat-square&logo=rest&logoColor=white" alt="RESTful APIs" />
            <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
            <img src="https://img.shields.io/badge/OAuth_2.0-EB5424?style=flat-square&logo=oauth&logoColor=white" alt="OAuth 2.0" />
          </div>
        </div>
        <div>
          <p className="card-title mb-2">Databases & Cloud</p>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase" />
            <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
            <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS" />
            <img src="https://img.shields.io/badge/AWS_S3-569A31?style=flat-square&logo=amazon-s3&logoColor=white" alt="AWS S3" />
            <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazon-ec2&logoColor=white" alt="AWS EC2" />
            <img src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=aws-lambda&logoColor=white" alt="AWS Lambda" />
            <img src="https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=google-cloud&logoColor=white" alt="GCP" />
            <img src="https://img.shields.io/badge/GCP_Cloud_Storage-4285F4?style=flat-square&logo=google-cloud&logoColor=white" alt="GCP Cloud Storage" />
            <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis" />
          </div>
        </div>
        <div>
          <p className="card-title mb-2">Accolades</p>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/USACO-Gold-FFD700?style=flat-square" alt="USACO Gold" />
            <img src="https://img.shields.io/badge/Cal_Hacks-Winner-FF6B6B?style=flat-square" alt="Cal Hacks" />
            <img src="https://img.shields.io/badge/Cruz_Hacks-Winner-4ECDC4?style=flat-square" alt="Cruz Hacks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
