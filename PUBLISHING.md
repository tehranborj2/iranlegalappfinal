# راهنمای امضا و انتشار

## اطلاعات ثابت برنامه

```text
نام برنامه: ابزارهای حقوقی ایران لگال
Package ID: com.iranlegal.tools
Version name: 1.0.2
Version code: 8
```

پس از اولین انتشار، `Package ID` و کلید امضا را تغییر ندهید. در هر به‌روزرسانی بعدی، `versionCode` باید افزایش پیدا کند.

## Secretهای GitHub

چهار Secret زیر باید در مسیر Repository Settings > Secrets and variables > Actions ثبت شده باشند:

```text
ANDROID_KEYSTORE_BASE64
ANDROID_KEYSTORE_PASSWORD
ANDROID_KEY_ALIAS
ANDROID_KEY_PASSWORD
```

کلید و رمزها را داخل Repository قرار ندهید.

## ساخت فایل تست

Workflow زیر را اجرا کنید:

```text
Build Android Test APK
```

Artifact تست:

```text
iranlegal-v1.0.2-test-apk
```

## ساخت فایل انتشار

Workflow زیر را اجرا کنید:

```text
Build Signed Release APK and AAB
```

Artifact نهایی شامل موارد زیر است:

```text
iranlegal-v1.0.2-release.apk
iranlegal-v1.0.2-release.aab
apk-signature.txt
aab-signature.txt
apk-badging.txt
apk-files.txt
SHA256SUMS.txt
```

## کنترل پیش از انتشار

- آیکون ایران لگال روی لانچر گوشی نمایش داده شود.
- صفحه شروع سفید و لوگو کامل و بدون برش باشد.
- Splash هنگام بازشدن تازه برنامه نمایش داده شود و با Back از ابزار تکرار نشود.
- Back در ابزار یا سایت به خانه اپ برگردد.
- Back در خانه اپ، برنامه را به پس‌زمینه ببرد.
- نسخه نهایی `1.0.2` و `versionCode 8` باشد.
