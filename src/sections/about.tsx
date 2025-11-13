import Card from "@/components/card";

export default function About() {
  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">公司愿景、教育理念、办学特色</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col">
        <Card
          title="全人教育"
          icon="/globe.svg"
          description="Description about Ran Learning's approach, Lorem ipsum dolor sit amet"
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
        <Card
          title="双语优势"
          icon="/globe.svg"
          description="Description about Ran Learning's approach, Lorem ipsum dolor sit amet"
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
        <Card
          title="小班制"
          icon="/globe.svg"
          description="Description about Ran Learning's approach, Lorem ipsum dolor sit amet"
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
        <Card
          title="互动式教学"
          icon="/globe.svg"
          description="Description about Ran Learning's approach, Lorem ipsum dolor sit amet"
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
      </div>

      <div className="mx-auto w-full flex flex-col items-center">
        <hr className="my-0 border-t border-black w-[100px]" />
      </div>

      <div className="px-6">
        <h2 className="text-3xl font-bold">教师团队</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        <p className="text-md">
          教师团队简介（粗略介绍，不需要详细到个人）Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
    </div>
  );
}