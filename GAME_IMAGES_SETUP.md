# 游戏图片设置指南

## 图片文件位置

请将以下游戏图片放入 `public/images/games/` 目录：

## 需要的图片文件：

1. **5-lions-megaways.jpg**
   - 游戏：5 LIONS MEGAWAYS™
   - 描述：金色狮子 Foo Dog 主题

2. **starlight-princess-1000.jpg**
   - 游戏：Starlight Princess 1000
   - 描述：动漫风格天使公主

3. **gates-of-olympus-1000.jpg**
   - 游戏：Gates of Olympus 1000
   - 描述：宙斯和希腊神庙主题

4. **ancient-egypt-classic.jpg**
   - 游戏：ANCIENT EGYPT Classic
   - 描述：埃及女王主题

5. **caishens-gold.jpg**
   - 游戏：Caishen's Gold
   - 描述：财神和金币主题

6. **gates-of-olympus-1000-alt.jpg**
   - 游戏：Gates of Olympus 1000 (备用版本)
   - 描述：宙斯主题（不同角度）

## 图片要求：

- **格式**：JPG 或 PNG
- **推荐尺寸**：600x400 像素（16:9 比例）
- **文件大小**：建议每个文件小于 500KB
- **命名**：必须与上述文件名完全一致（区分大小写）

## 图片路径结构：

```
public/
  images/
    games/
      ├── 5-lions-megaways.jpg
      ├── starlight-princess-1000.jpg
      ├── gates-of-olympus-1000.jpg
      ├── ancient-egypt-classic.jpg
      ├── caishens-gold.jpg
      └── gates-of-olympus-1000-alt.jpg
```

## 功能说明：

- 游戏卡片会在首页和游戏页面随机不重复显示
- 如果显示的游戏数量超过可用图片数量，才会重复使用
- 每个游戏卡片都包含"Hot Game"标签（如果有设置）
- 点击游戏卡片会跳转到对应的品牌链接

## 添加更多游戏：

如果想添加更多游戏，请编辑 `data/games.json` 文件，按照现有格式添加新的游戏条目。

