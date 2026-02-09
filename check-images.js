#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 需要的圖片列表
const requiredImages = {
  casinos: {
    
    heroes: [
      'shwe-hero.jpg',
      '777-hero.jpg',
      '888-hero.jpg',
      'win8-hero.jpg',
      '999-hero.jpg',
      'pglucky88-hero.jpg',
      'fafafa-hero.jpg'
    ]
  },
  games: [
    '5-lions-megaways.jpg',
    'starlight-princess-1000.jpg',
    'gates-of-olympus-1000.jpg',
    'ancient-egypt-classic.jpg',
    'caishens-gold.jpg',
    'gates-of-olympus-1000-alt.jpg'
  ]
};

// 檢查目錄是否存在
const checkDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    console.log(`❌ 目錄不存在: ${dir}`);
    return false;
  }
  return true;
};

// 檢查文件是否存在
const checkFile = (filePath, fileName) => {
  const fullPath = path.join(filePath, fileName);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    return { exists: true, size: sizeKB };
  }
  return { exists: false, size: 0 };
};

// 主檢查函數
const checkImages = () => {
  console.log('🔍 檢查圖片文件...\n');
  
  const baseDir = path.join(__dirname, 'public', 'images');
  let totalRequired = 0;
  let totalFound = 0;
  let totalMissing = 0;

  // 檢查 Casino Logos
  console.log('📁 Casino Logos:');
  const casinoLogoDir = path.join(baseDir, 'casinos');
  if (checkDirectory(casinoLogoDir)) {
    requiredImages.casinos.logos.forEach(fileName => {
      totalRequired++;
      const result = checkFile(casinoLogoDir, fileName);
      if (result.exists) {
        console.log(`  ✅ ${fileName} (${result.size} KB)`);
        totalFound++;
      } else {
        console.log(`  ❌ ${fileName} - 缺失`);
        totalMissing++;
      }
    });
  } else {
    totalRequired += requiredImages.casinos.logos.length;
    totalMissing += requiredImages.casinos.logos.length;
    requiredImages.casinos.logos.forEach(fileName => {
      console.log(`  ❌ ${fileName} - 目錄不存在`);
    });
  }

  console.log('\n📁 Casino Hero 圖片:');
  const casinoHeroDir = path.join(baseDir, 'casinos');
  if (checkDirectory(casinoHeroDir)) {
    requiredImages.casinos.heroes.forEach(fileName => {
      totalRequired++;
      const result = checkFile(casinoHeroDir, fileName);
      if (result.exists) {
        console.log(`  ✅ ${fileName} (${result.size} KB)`);
        totalFound++;
      } else {
        console.log(`  ❌ ${fileName} - 缺失`);
        totalMissing++;
      }
    });
  } else {
    totalRequired += requiredImages.casinos.heroes.length;
    totalMissing += requiredImages.casinos.heroes.length;
    requiredImages.casinos.heroes.forEach(fileName => {
      console.log(`  ❌ ${fileName} - 目錄不存在`);
    });
  }

  console.log('\n📁 遊戲圖片:');
  const gamesDir = path.join(baseDir, 'games');
  if (checkDirectory(gamesDir)) {
    requiredImages.games.forEach(fileName => {
      totalRequired++;
      const result = checkFile(gamesDir, fileName);
      if (result.exists) {
        console.log(`  ✅ ${fileName} (${result.size} KB)`);
        totalFound++;
      } else {
        console.log(`  ❌ ${fileName} - 缺失`);
        totalMissing++;
      }
    });
  } else {
    totalRequired += requiredImages.games.length;
    totalMissing += requiredImages.games.length;
    requiredImages.games.forEach(fileName => {
      console.log(`  ❌ ${fileName} - 目錄不存在`);
    });
  }

  // 總結
  console.log('\n' + '='.repeat(50));
  console.log('📊 總結:');
  console.log(`  總共需要: ${totalRequired} 張圖片`);
  console.log(`  已找到: ${totalFound} 張圖片`);
  console.log(`  缺失: ${totalMissing} 張圖片`);
  console.log(`  完成度: ${((totalFound / totalRequired) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));

  if (totalMissing === 0) {
    console.log('\n🎉 所有圖片都已準備完成！');
  } else {
    console.log(`\n⚠️  還有 ${totalMissing} 張圖片需要添加。`);
    console.log('📖 請查看 IMAGE_SETUP_GUIDE.md 了解詳細說明。');
  }
};

// 執行檢查
checkImages();



