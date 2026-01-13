import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") || "movie";
    const tag = searchParams.get("tag") || "热门";
    const pageLimit = searchParams.get("page_limit") || "12";
    const pageStart = searchParams.get("page_start") || "0";

    // 构建豆瓣API URL
    const doubanUrl = `https://movie.douban.cmliussss.com/j/search_subjects?type=${type}&tag=${encodeURIComponent(
      tag
    )}&sort=recommend&page_limit=${pageLimit}&page_start=${pageStart}`;

    // 使用代理请求豆瓣API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(doubanUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://movie.douban.com/",
        Accept: "application/json, text/plain, */*",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // 返回数据
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("豆瓣API请求失败:", error);

    return NextResponse.json(
      {
        error: "获取数据失败",
        message: error.message,
        subjects: [],
      },
      { status: 500 }
    );
  }
}
