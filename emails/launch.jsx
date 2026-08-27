import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

/*
 * The launch email.
 *
 * The copy is bound by what the signup form promised: "One launch email. No
 * newsletters, no sharing with third parties." So this is that one email, and
 * it says so inside — a reader who does not remember signing up gets the
 * reason in the first lines rather than at the bottom in grey.
 *
 * Styling is inline and the layout is a single column: email clients strip
 * stylesheets, ignore flexbox and disagree about everything else. The palette
 * and type come from the site so the email reads as its continuation.
 */

const SITE = 'https://enigmavisibility.com';

const ink = '#1f1a14';
const muted = '#6f6862';
const line = '#e6ded2';
const cobalt = '#6B3FFF';

const copy = {
  en: {
    preview: 'Enigma is open — your audit is first in the queue',
    heading: 'Enigma is open.',
    lead: 'You left your address on the waitlist, so you are getting this first. This is the launch email we promised, and the only one — no newsletter follows it.',
    body: [
      'Enigma measures whether AI answers cite you: it checks which agents can reach your pages, runs the same prompt clusters across models and dates, and separates a mention from a citation from real influence on the answer.',
      'Your audit is first in the queue. Open it with the address you signed up with.',
    ],
    cta: 'Run my audit',
    boundary: 'The same boundary as on the site: this improves the odds of being cited. Nobody can guarantee inclusion in an AI answer.',
    signoff: 'Symon, founder',
    unsubPre: 'If this is not for you, ',
    unsubLink: 'unsubscribe',
    unsubPost: ' — you will not hear from us again.',
  },
  uk: {
    preview: 'Enigma відкрита — ваш аудит перший у черзі',
    heading: 'Enigma відкрита.',
    lead: 'Ви залишили адресу в листі очікування, тож отримуєте це першими. Це той самий лист про запуск, який ми обіцяли, і єдиний — розсилки після нього не буде.',
    body: [
      'Enigma вимірює, чи цитують вас відповіді AI: перевіряє, які агенти дістають ваші сторінки, проганяє однакові prompt clusters по моделях і датах та відокремлює згадку від цитати й від реального впливу на відповідь.',
      'Ваш аудит перший у черзі. Відкрийте його адресою, з якою ви підписалися.',
    ],
    cta: 'Запустити мій аудит',
    boundary: 'Та сама межа, що й на сайті: це підвищує шанс цитування. Гарантувати потрапляння у відповідь AI не може ніхто.',
    signoff: 'Symon, засновник',
    unsubPre: 'Якщо це не для вас — ',
    unsubLink: 'відпишіться',
    unsubPost: ', більше ми не напишемо.',
  },
  ru: {
    preview: 'Enigma открыта — ваш аудит первый в очереди',
    heading: 'Enigma открыта.',
    lead: 'Вы оставили адрес в листе ожидания, поэтому получаете это первыми. Это то самое письмо о запуске, которое мы обещали, и единственное — рассылки после него не будет.',
    body: [
      'Enigma измеряет, цитируют ли вас ответы AI: проверяет, какие агенты достают ваши страницы, прогоняет одинаковые prompt clusters по моделям и датам и отделяет упоминание от цитаты и от реального влияния на ответ.',
      'Ваш аудит первый в очереди. Откройте его тем адресом, с которым вы подписались.',
    ],
    cta: 'Запустить мой аудит',
    boundary: 'Та же граница, что и на сайте: это повышает шанс цитирования. Гарантировать попадание в ответ AI не может никто.',
    signoff: 'Symon, основатель',
    unsubPre: 'Если это не для вас — ',
    unsubLink: 'отпишитесь',
    unsubPost: ', больше мы не напишем.',
  },
};

export default function LaunchEmail({ lang = 'en' }) {
  const t = copy[lang] ?? copy.en;
  const path = lang === 'en' ? '' : `/${lang}`;

  return (
    <Html lang={lang}>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={{ background: '#faf7f2', margin: 0, padding: '32px 0', fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <Container style={{ background: '#ffffff', maxWidth: '560px', margin: '0 auto', padding: '40px 40px 32px', border: `1px solid ${line}`, borderRadius: '18px' }}>
          <Text style={{ margin: 0, fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: muted, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Enigma
          </Text>

          <Text style={{ margin: '18px 0 0', fontSize: '30px', lineHeight: '1.2', color: ink, fontWeight: 'bold' }}>
            {t.heading}
          </Text>

          <Text style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: '1.65', color: ink, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {t.lead}
          </Text>

          {t.body.map((paragraph) => (
            <Text key={paragraph.slice(0, 24)} style={{ margin: '16px 0 0', fontSize: '16px', lineHeight: '1.65', color: muted, fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {paragraph}
            </Text>
          ))}

          <Section style={{ margin: '30px 0 4px' }}>
            <Button
              href={`${SITE}${path}`}
              style={{ background: cobalt, color: '#ffffff', fontSize: '15px', fontWeight: 'bold', fontFamily: 'Helvetica, Arial, sans-serif', padding: '14px 26px', borderRadius: '999px', textDecoration: 'none' }}
            >
              {t.cta}
            </Button>
          </Section>

          <Hr style={{ borderColor: line, margin: '30px 0 18px' }} />

          <Text style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: muted, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {t.boundary}
          </Text>

          <Text style={{ margin: '18px 0 0', fontSize: '15px', color: ink, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {t.signoff}
          </Text>

          <Text style={{ margin: '22px 0 0', fontSize: '12px', lineHeight: '1.6', color: muted, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {t.unsubPre}
            {/* Resend swaps this token for the real one-click link at send time. */}
            <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}" style={{ color: muted, textDecoration: 'underline' }}>
              {t.unsubLink}
            </Link>
            {t.unsubPost}
          </Text>

          <Text style={{ margin: '10px 0 0', fontSize: '12px', color: muted, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <Link href={`${SITE}${path}/privacy`} style={{ color: muted }}>
              {lang === 'en' ? 'Privacy' : lang === 'uk' ? 'Конфіденційність' : 'Конфиденциальность'}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
