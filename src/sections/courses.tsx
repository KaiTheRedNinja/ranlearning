'use client'

import Card from "@/components/card"

export default function Courses() {
  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">课程介绍</h2>
      </div>
      
      <div className="px-6 gap-4 flex flex-col">
        <p className="text-md">
          Brief recap of Ran Learning's teaching style, include mentions of 小学华文补习  /  中学华文 / JC H1华文 IBDP中文 (each will be links)
        </p>
      </div>

      <div className="mx-auto w-full flex flex-col items-center">
        <hr className="my-0 border-t border-black w-[100px]" />
      </div>

      <div className="px-6">
        <h2 className="text-3xl font-bold">特色课程</h2>
      </div>

      {/* Horizontal scroll view */}
      <div className="">
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title="假期班课程"
                description="Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#f0f9ff"
                titleColor="#0c4a6e"
                bodyColor="#475569"
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title="一对一私人定制"
                description="Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#fffbeb"
                titleColor="#92400e"
                bodyColor="#78716c"
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title="商务中文"
                description="Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#fef2f2"
                titleColor="#7f1d1d"
                bodyColor="#57534e"
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                title="?"
                description="Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#f0fdf4"
                titleColor="#14532d"
                bodyColor="#44403c"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full flex flex-col items-center">
        <div
          className="flex-shrink-0 overflow-hidden rounded-full"
          style={{
            backgroundColor: '#ECB34F',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
        >
          <p className="py-4 px-8 text-center font-bold text-xl">
            立即报名!
          </p>
        </div>
      </div>
    </div>
  );
}