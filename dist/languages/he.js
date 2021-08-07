"use strict";
exports.__esModule = true;
var translations = {
    "auth/claims-too-large": "הלווין טענות הניתן setCustomUserClaims() חורג מהגודל המקסימלי המותר של 1000 בייטים.",
    "auth/email-already-exists": "הדואל שסופק כבר נמצא בשימוש על ידי משתמש קיים. על כל משתמש לקבל דואל ייחודי.",
    "auth/id-token-expired": "פג תוקף אסימון ה- Firebase המסופק.",
    "auth/id-token-revoked": "אסימון מזהה Firebase בוטל.",
    "auth/insufficient-permission": "האישור המשמש לאתחול ה- SDK למנהלי מערכת אין מספיק הרשאה לגשת למשאב האימות המבוקש. עיין הגדרת פרויקט Firebase עבור תיעוד על איך ליצור תעודה עם הרשאות מתאימות ולהשתמש בו כדי לאמת את ערכות SDK הניהול.",
    "auth/internal-error": "שרת האימות נתקל בשגיאה לא צפויה בזמן שניסה לעבד את הבקשה. הודעת השגיאה צריכה להכיל את התגובה משרת האימות המכילה מידע נוסף. אם נמשך השגיאה, אנא דווח על הבעיה שלנו דיווחעלבאג ערוץ התמיכה.",
    "auth/invalid-argument": "טיעון לא חוקי סופק לשיטת אימות. הודעת השגיאה צריכה להכיל מידע נוסף.",
    "auth/invalid-claims": "תכונות טענת המנהג הניתנות setCustomUserClaims() איננו חוקיות.",
    "auth/invalid-continue-uri": "כתובת האתר המשך חייבת להיות מחרוזת חוקית של כתובת האתר.",
    "auth/invalid-creation-time": "זמן היצירה חייב להיות מחרוזת תאריך תקפה.",
    "auth/invalid-credential": "לא ניתן להשתמש בכניסה המשמשת לאימות ה- SDK של מנהל המערכת לביצוע הפעולה הרצויה. אימות מסוימות שיטות כגון createCustomToken() ו verifyIdToken() דורשות SDK כדי להיות מאותחלות עם תעודת תעודה להבדיל תעודת ברירת אסימון או יישום רענון. ראה לאתחל את ה- SDK עבור תיעוד על כיצד לאמת בערכות פיתוח Admin עם תעודת תעודה.",
    "auth/invalid-disabled-field": "על הערך המצוין עבור disabled נכס המשתמש אינו חוקי. זה בטח בוליאני.",
    "auth/invalid-display-name": "על הערך המצוין עבור displayName נכס המשתמש אינו חוקי. זה חייב להיות מחרוזת שאינה ריקה.",
    "auth/invalid-dynamic-link-domain": "תחום הקישור הדינמי שסופק אינו מוגדר או מורשה לפרויקט הנוכחי.",
    "auth/invalid-email": "על הערך המצוין עבור email נכס המשתמש איננו חוקי. זו חייבת להיות כתובת דואל מחרוזת.",
    "auth/invalid-email-verified": "על הערך המצוין עבור emailVerified נכס המשתמש אינו חוקי. זה בטח בוליאני.",
    "auth/invalid-hash-algorithm": "אלגוריתם ה- hash חייב להתאים לאחד המחרוזות ברשימת האלגוריתמים הנתמכים.",
    "auth/invalid-hash-block-size": "גודל גוש החשיש חייב להיות מספר חוקי.",
    "auth/invalid-hash-derived-key-length": "אורך המפתח שמקורו ב- hash חייב להיות מספר חוקי.",
    "auth/invalid-hash-key": "מפתח ה- hash חייב להיות מאגר בתים חוקי.",
    "auth/invalid-hash-memory-cost": "עלות זיכרון ה- hash חייבת להיות מספר תקף.",
    "auth/invalid-hash-parallelization": "הקבלה החשיש חייבת להיות מספר חוקי.",
    "auth/invalid-hash-rounds": "סבבי החשיש חייבים להיות מספר תקף.",
    "auth/invalid-hash-salt-separator": "שדה הפרדת המלח של אלגוריתם הגיבוב חייב להיות מאגר בתים תקף.",
    "auth/invalid-id-token": "אסימון המזהה שסופק אינו אסימון מזהה Firebase תקף.",
    "auth/invalid-last-sign-in-time": "זמן הכניסה האחרון חייב להיות מחרוזת תאריך תקפה של UTC.",
    "auth/invalid-page-token": "הדף הבא מסופק בשפה הרפה listUsers() אינו חוקי. זה חייב להיות מחרוזת חוקית שאינה ריקה.",
    "auth/invalid-password": "על הערך המצוין עבור password נכס המשתמש אינו חוקי. זה חייב להיות מחרוזת עם לפחות שש תווים.",
    "auth/invalid-password-hash": "חשיש הסיסמה חייב להיות מאגר בתים תקף.",
    "auth/invalid-password-salt": "מלח הסיסמה חייב להיות מאגר בתים תקף",
    "auth/invalid-phone-number": "על הערך המצוין עבור phoneNumber אינו חוקי. זה חייב להיות מחרוזת מזהה סטנדרטית שאינה ריקה E.164.",
    "auth/invalid-photo-url": "על הערך המצוין עבור photoURL נכס המשתמש אינו חוקי. זו חייבת להיות כתובת URL של מחרוזת.",
    "auth/invalid-provider-data": "ה- providerData חייב להיות מערך חוקי של אובייקטים של UserInfo.",
    "auth/invalid-provider-id": "ספק ה- id חייב להיות מחרוזת מזהה ספק נתמכת חוקית.",
    "auth/invalid-oauth-responsetype": "רק בדיוק אחד OAuth responseType צריך להיות מוגדר נכון.",
    "auth/invalid-session-cookie-duration": "משך עוגיית ההפעלה חייב להיות מספר תקף באלפיות השנייה בין 5 דקות לשבועיים.",
    "auth/invalid-uid": "סיפק uid חייב להיות מחרוזת שאינה ריקה עם 128 תווים לכל היותר.",
    "auth/invalid-user-import": "רשומת המשתמש לייבא אינה חוקית.",
    "auth/maximum-user-count-exceeded": "המספר המקסימלי המותר של ייבוא ​​חרג.",
    "auth/missing-android-pkg-name": "יש לספק שם חבילה של Android אם נדרשת התקנת אפליקציית Android.",
    "auth/missing-continue-uri": "יש לספק כתובת URL חוקית להמשיך בבקשה.",
    "auth/missing-hash-algorithm": "ייבוא ​​משתמשים עם חשיפת סיסמה מחייב לספק את אלגוריתם הגיבוב והפרמטרים שלו.",
    "auth/missing-ios-bundle-id": "בבקשה חסר מזהה חבילה של iOS.",
    "auth/missing-uid": "uid מזהה נדרש עבור הניתוח הנוכחי.",
    "auth/missing-oauth-client-secret": "סוד לקוח התצורה של OAuth נדרש כדי לאפשר זרימת קוד OIDC.",
    "auth/operation-not-allowed": "ספק הכניסה שסופק מושבת בפרויקט Firebase שלך. האם להפעיל אותו מן הכניסה של שיטת הקטע במסוף Firebase.",
    "auth/phone-number-already-exists": "סיפק phoneNumber נמצא כבר בשימוש על ידי משתמש קיים. כל משתמש חייב להיות ייחודי phoneNumber .",
    "auth/project-not-found": "לא נמצא פרויקט Firebase עבור האישור המשמש לאתחול ה- SDK של מנהל המערכת. עיינו הגדרת פרויקט Firebase עבור תיעוד על איך ליצור אישורים עבור הפרויקט שלך ולהשתמש בו כדי לאמת את ערכות SDK הניהול.",
    "auth/reserved-claims": "אחת או יותר תביעות משתמש מותאמות אישית הניתנות setCustomUserClaims() שמור. לדוגמה, OIDC טענות ספציפיות כגון (משנה, iat, ISS, exp, AUD, auth_time, וכו ') לא אמורות לשמש מפתחות לתביעות מנהג.",
    "auth/session-cookie-expired": "פג תוקפו של קובץ ה- cookie של הפעלת Firebase.",
    "auth/session-cookie-revoked": "קובץ ה- cookie של הפעלת Firebase בוטל.",
    "auth/uid-already-exists": "סיפק uid נמצא כבר בשימוש על ידי משתמש קיים. כל משתמש חייב להיות ייחודי uid .",
    "auth/unauthorized-continue-uri": "הדומיין של כתובת ה- URL הממשיכה אינו ברשימת היתרים. הוסף לרשימה הלבנה את הדומיין במסוף Firebase.",
    "auth/user-not-found": "אין רשומת משתמש קיימת המתאימה למזהה שסופק.",
    "else": "שגיאת שרת."
};
exports["default"] = translations;
//# sourceMappingURL=he.js.map