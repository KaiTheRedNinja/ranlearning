'use client'

import Card from "@/components/card";

export default function Blog() {
  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">资源中心</h2>
      </div>

      <div className="px-6 gap-4 flex flex-col mb-8">
        <Card
          title="如何在家提升孩子华文"
          trailingIcon="open-in-new.svg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          showMore={true}
          onClick={() => { console.log("Blog item pressed!") }}
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
        <Card
          title="新加坡考试制度变化"
          trailingIcon="open-in-new.svg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          showMore={true}
          onClick={() => { console.log("Blog item pressed!") }}
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
        <Card
          title="免费下载"
          trailingIcon="open-in-new.svg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          showMore={true}
          onClick={() => { console.log("Blog item pressed!") }}
          backgroundColor="#ECB34F"
          titleColor="#523211"
        />
      </div>
    </div>
  );
}