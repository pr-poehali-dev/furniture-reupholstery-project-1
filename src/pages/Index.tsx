import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_CRAFT = "https://cdn.poehali.dev/projects/334b3b16-7eae-4baf-b335-cab3c23a7e77/files/10dc10a4-ad38-4d0a-a643-da451ee76eb4.jpg";
const IMG_CHAIR = "https://cdn.poehali.dev/projects/334b3b16-7eae-4baf-b335-cab3c23a7e77/files/e9787b8d-9d1b-421e-adc0-2573d59c47fd.jpg";
const IMG_BEFORE_AFTER = "https://cdn.poehali.dev/projects/334b3b16-7eae-4baf-b335-cab3c23a7e77/files/76847426-2666-479a-99d9-6c6ec46b4cb5.jpg";

const services = [
  { icon: "Sofa", title: "Перетяжка диванов", desc: "Полное обновление обивки любого дивана. Более 300 тканей и кожзамов на выбор.", price: "от 8 000 ₽" },
  { icon: "Armchair", title: "Перетяжка кресел", desc: "Реставрация и перетяжка кресел любой сложности. Сохраняем форму и конструкцию.", price: "от 4 500 ₽" },
  { icon: "Layers", title: "Замена наполнителя", desc: "Меняем пружины, поролон, синтепон. Мебель снова упругая и долговечная.", price: "от 2 000 ₽" },
  { icon: "Wrench", title: "Ремонт каркаса", desc: "Усиление и восстановление деревянных и металлических каркасов мебели.", price: "от 1 500 ₽" },
  { icon: "Sparkles", title: "Дизайнерские решения", desc: "Создаём уникальный образ мебели под ваш интерьер. Работаем с дизайнерами.", price: "от 12 000 ₽" },
  { icon: "Truck", title: "Выезд и доставка", desc: "Забираем и привозим мебель самостоятельно. Работаем по всему городу.", price: "от 800 ₽" },
];

const reviews = [
  { name: "Анна Петрова", role: "Дизайнер интерьеров", text: "Работаю с этой мастерской уже 3 года. Качество всегда на высоте — и по срокам, и по исполнению. Клиенты довольны.", stars: 5 },
  { name: "Михаил Соколов", role: "Владелец ресторана", text: "Перетянули 40 стульев для нашего ресторана. Всё сделали быстро и аккуратно. Теперь заведение выглядит как новое!", stars: 5 },
  { name: "Елена Васильева", role: "Частный клиент", text: "Диван служил 15 лет, думала выбрасывать. После перетяжки — будто купила новый. Сэкономила 60 тысяч рублей!", stars: 5 },
];

const galleryItems = [
  { img: IMG_CHAIR, label: "Кресло в бургундском бархате" },
  { img: IMG_CRAFT, label: "Процесс перетяжки" },
  { img: IMG_BEFORE_AFTER, label: "До и после реставрации" },
];

const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(14,11,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ border: "1px solid #C9A84C" }}>
              <span style={{ color: "#C9A84C", fontSize: "1rem", fontFamily: "Cormorant Garamond, serif" }}>Р</span>
            </div>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 300, letterSpacing: "0.15em", color: "#EDE8DC" }}>
              РеСтайл
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm tracking-wider">{l.label}</a>
            ))}
          </div>
          <a href="#contacts" className="hidden md:block btn-gold">Заказать</a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} style={{ color: "#C9A84C" }} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(14,11,8,0.98)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="nav-link text-sm tracking-wider py-2">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 70%), #0E0B08" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block" style={{ opacity: 0.3 }}>
          <img src={IMG_CRAFT} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0E0B08 0%, rgba(14,11,8,0.1) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>
              Перетяжка мебели №1 · Барнаул
            </p>
            <h1 className="mb-6 leading-[1.05]" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, color: "#EDE8DC" }}>
              Новая жизнь{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>вашей</span>
              <br />мебели
            </h1>
            <p className="mb-10 max-w-md leading-relaxed" style={{ color: "#A89880", fontSize: "1.05rem" }}>
              Профессиональная перетяжка и реставрация мебели. Более 15 лет опыта. Гарантия качества на 3 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacts" className="btn-gold">Получить расчёт</a>
              <a href="#gallery" className="btn-outline-gold">Смотреть работы</a>
            </div>
            <div className="mt-14 flex gap-10">
              {[{ num: "15+", label: "лет опыта" }, { num: "2 000+", label: "выполнено работ" }, { num: "3 года", label: "гарантия" }].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>{s.num}</div>
                  <div className="mt-1 text-xs tracking-wider uppercase" style={{ color: "#6B5E4E" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={22} style={{ color: "#C9A84C", opacity: 0.6 }} />
        </div>
      </section>

      <div className="gold-line" />

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <img src={IMG_CHAIR} alt="Наша работа" className="w-full h-[500px] object-cover" style={{ filter: "brightness(0.85)" }} />
              <div className="absolute -bottom-4 -right-4 w-full h-full border pointer-events-none" style={{ borderColor: "rgba(201,168,76,0.25)" }} />
              <div className="absolute bottom-8 -left-6 px-6 py-4" style={{ background: "#C9A84C" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 600, color: "#0E0B08", lineHeight: 1 }}>2009</div>
                <div className="text-xs tracking-wider mt-1" style={{ color: "#3a2800" }}>год основания</div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>О нас</p>
            <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.2 }}>
              Мастерская с душой<br />и <span style={{ color: "#C9A84C", fontStyle: "italic" }}>историей</span>
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#A89880" }}>
              Мы начали работу в 2009 году с маленькой мастерской и большой любовью к ремеслу. Сегодня мы — команда из 12 профессионалов, которые возвращают жизнь мебели с любым уровнем износа.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#A89880" }}>
              Каждый проект — это уникальная история. Мы не просто меняем ткань, мы восстанавливаем ценные вещи и создаём новый облик пространства.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", text: "Сертифицированные мастера" },
                { icon: "Package", text: "Материалы класса люкс" },
                { icon: "Clock", text: "Точные сроки выполнения" },
                { icon: "Shield", text: "Гарантия 3 года" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}>
                  <Icon name={f.icon} fallback="Check" size={18} style={{ color: "#C9A84C", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#C0B49A" }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>Что мы делаем</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#EDE8DC" }}>
              Наши <span style={{ color: "#C9A84C", fontStyle: "italic" }}>услуги</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal p-8"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  background: "rgba(201,168,76,0.03)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  transition: "border-color 0.3s ease, background 0.3s ease, transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.1)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.03)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Icon name={s.icon} fallback="Sparkles" size={22} style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="mb-3 text-lg" style={{ color: "#EDE8DC", fontWeight: 500 }}>{s.title}</h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: "#7A6E60" }}>{s.desc}</p>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: "#C9A84C", fontWeight: 300 }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>Портфолио</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#EDE8DC" }}>
              Наши <span style={{ color: "#C9A84C", fontStyle: "italic" }}>работы</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="reveal relative overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 0.12}s`, aspectRatio: "4/5" }}
                onMouseEnter={() => setHoveredGallery(i)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  style={{ transform: hoveredGallery === i ? "scale(1.08)" : "scale(1)", transition: "transform 0.7s ease" }}
                />
                <div
                  className="absolute inset-0 flex items-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(14,11,8,0.85) 0%, transparent 60%)",
                    opacity: hoveredGallery === i ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <span className="text-sm tracking-wide" style={{ color: "#EDE8DC" }}>{item.label}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden" style={{ background: "linear-gradient(to top, rgba(14,11,8,0.9), transparent)" }}>
                  <span className="text-xs" style={{ color: "#C0B49A" }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>Что говорят клиенты</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#EDE8DC" }}>
              Отзывы <span style={{ color: "#C9A84C", fontStyle: "italic" }}>клиентов</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={r.name} className="reveal p-8" style={{ transitionDelay: `${i * 0.1}s`, background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: "#C9A84C", fill: "#C9A84C" }} />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: "#A89880", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontStyle: "italic" }}>
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center text-sm font-semibold" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: "#EDE8DC" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "#5E5044" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(14,11,8,1) 50%, rgba(201,168,76,0.05) 100%)" }}>
        <div className="reveal max-w-2xl mx-auto">
          <h2 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.2 }}>
            Готовы обновить <span style={{ color: "#C9A84C", fontStyle: "italic" }}>вашу мебель?</span>
          </h2>
          <p className="mb-8" style={{ color: "#7A6E60" }}>Оставьте заявку и получите бесплатный расчёт в течение 30 минут</p>
          <a href="#contacts" className="btn-gold">Рассчитать стоимость</a>
        </div>
      </section>

      <div className="gold-line" />

      {/* CONTACTS */}
      <section id="contacts" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ color: "#C9A84C" }}>Связаться с нами</p>
            <h2 className="mb-8" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.2 }}>
              Контакты
            </h2>
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "8-923-656-6500" },
                { icon: "MapPin", label: "Адрес", value: "Барнаул, ул. Попова 181/1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00 – 19:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center mt-0.5 flex-shrink-0" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                    <Icon name={c.icon} fallback="Info" size={16} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase mb-1" style={{ color: "#5E5044" }}>{c.label}</div>
                    <div style={{ color: "#C0B49A" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="p-8 lg:p-10" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h3 className="mb-6" style={{ color: "#EDE8DC", fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "1.6rem" }}>
                Оставить заявку
              </h3>
              <div className="space-y-4">
                {[{ placeholder: "Ваше имя", type: "text" }, { placeholder: "Телефон", type: "tel" }, { placeholder: "Email", type: "email" }].map((f) => (
                  <input
                    key={f.placeholder}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", color: "#EDE8DC", transition: "border-color 0.3s" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.15)")}
                  />
                ))}
                <textarea
                  placeholder="Опишите вашу мебель и пожелания"
                  rows={4}
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", color: "#EDE8DC", transition: "border-color 0.3s" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.15)")}
                />
                <button className="btn-gold w-full text-center">Отправить заявку</button>
                <p className="text-xs text-center" style={{ color: "#3E342A" }}>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 300, color: "#5E5044" }}>РеСтайл</span>
          <p className="text-xs" style={{ color: "#3E342A" }}>© 2024 РеСтайл. Все права защищены.</p>
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-xs nav-link">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}