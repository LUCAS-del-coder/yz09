"use client";

import Image from "next/image";

export default function TestSimplePage() {
  return (
    <div className="min-h-screen bg-dark p-8">
      <h1 className="text-3xl font-bold text-white mb-8">簡單圖片測試</h1>
      
      <div className="space-y-8">
        <div className="bg-dark-lighter p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">測試 1: 直接使用 img 標籤</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 mb-2">路徑: /images/casinos/shwe-hero.jpg</p>
              <img 
                src="/images/casinos/shwe-hero.jpg" 
                alt="Shwe Hero"
                className="w-full max-w-md h-auto rounded"
                onError={(e) => {
                  console.error("圖片加載失敗:", e);
                  e.currentTarget.style.border = "2px solid red";
                }}
                onLoad={() => console.log("圖片加載成功!")}
              />
            </div>
          </div>
        </div>

        <div className="bg-dark-lighter p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">測試 2: 使用 Next.js Image 組件</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 mb-2">路徑: /images/casinos/shwe-hero.jpg</p>
              <div className="w-full max-w-md h-64 bg-white/10 rounded overflow-hidden">
                <Image
                  src="/images/casinos/shwe-hero.jpg"
                  alt="Shwe Hero"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                  onError={() => console.error("Next.js Image 加載失敗")}
                  onLoad={() => console.log("Next.js Image 加載成功!")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-lighter p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">測試 3: 所有 Hero 圖片</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "shwe-hero.jpg",
              "777-hero.jpg",
              "888-hero.jpg",
              "win8-hero.jpg",
              "999-hero.jpg",
              "pglucky88-hero.jpg",
              "fafafa-hero.jpg"
            ].map((filename) => (
              <div key={filename} className="bg-white/5 p-4 rounded">
                <p className="text-gray-400 text-xs mb-2">{filename}</p>
                <img 
                  src={`/images/casinos/${filename}`}
                  alt={filename}
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.style.border = "2px solid red";
                    e.currentTarget.alt = "加載失敗";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-lighter p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">調試信息</h2>
          <div className="text-gray-400 text-sm space-y-2">
            <p>1. 打開瀏覽器開發者工具 (F12)</p>
            <p>2. 查看 Console 標籤，看是否有錯誤訊息</p>
            <p>3. 查看 Network 標籤，檢查圖片請求的狀態</p>
            <p>4. 如果圖片顯示紅色邊框，表示加載失敗</p>
          </div>
        </div>
      </div>
    </div>
  );
}

