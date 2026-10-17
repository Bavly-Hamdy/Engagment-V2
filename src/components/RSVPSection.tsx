import React, { useState } from "react";
import { Heart, Send, CheckCircle2, Sparkles, MessageSquareHeart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    status: "attending",
    guestsCount: 1,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);

    try {
      const existing = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
      existing.push({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem("wedding_rsvps", JSON.stringify(existing));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-24 sm:py-36 px-4 sm:px-6 select-none"
      style={{
        background: "radial-gradient(circle at center, #fdf9f0 0%, #f6ecd8 60%, #f4ead6 100%)",
      }}
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 pointer-events-none">🌹</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20 pointer-events-none">💍</div>
      <div className="absolute inset-4 sm:inset-8 border border-[#b8925a]/15 rounded-[36px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        {/* Pill */}
        <div className="mb-4">
          <span
            className="inline-block uppercase tracking-[4px] text-[10px] sm:text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#b8925a]/35 bg-white/75 shadow-xs"
            style={{ color: "#8a6a3d", fontFamily: "'Montserrat', sans-serif" }}
          >
            RSVP &amp; GUESTBOOK
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{
            color: "#5c4322",
            fontFamily: "'Aref Ruqaa', serif",
            textShadow: "0 2px 10px rgba(90,66,34,0.1)",
          }}
        >
          شاركونا فرحتنا
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
          <MessageSquareHeart size={20} className="text-[#b8925a]" />
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
        </div>

        <p
          className="max-w-md mx-auto text-base sm:text-lg text-[#6b5433] mb-10 px-4 leading-relaxed"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          فرحتنا لن تكتمل إلا بوجودكم ورؤية ابتسامتكم، يرجى تأكيد الحضور وكتابة كلمة تذكارية للعروسين
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* Thank You State with celebration animation */
            <motion.div
              key="thank-you"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#b8925a]/45 shadow-2xl text-center relative overflow-hidden"
              style={{
                boxShadow: "0 25px 60px rgba(90,66,34,0.18)",
              }}
            >
              <div className="w-20 h-20 rounded-full bg-[#b8925a]/10 border border-[#b8925a]/35 flex items-center justify-center text-[#b8925a] mx-auto mb-5">
                <CheckCircle2 size={44} className="text-[#b8925a] animate-bounce" />
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold text-[#5c4322] mb-3"
                style={{ fontFamily: "'Aref Ruqaa', serif" }}
              >
                {formData.status === "attending"
                  ? `أهلاً ومرحباً بك يا ${formData.name}! ✨`
                  : `شكراً لك يا ${formData.name} 🌸`}
              </h3>

              <p
                className="text-base sm:text-lg text-[#6b5433] leading-relaxed mb-6"
                style={{ fontFamily: "'Amiri', serif" }}
              >
                {formData.status === "attending"
                  ? "تم تسجيل حضورك بنجاح، ونتشوق لرؤيتك ومشاركتك معنا أجمل ليالي العمر! 💍🎉"
                  : "وصلتنا رسالتك الطيبة وتمنياتك الغالية، سيعز علينا غيابك ونسأل الله أن يديم بيننا الود والمسرات."}
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#8a6a3d] hover:text-[#5c4322] underline cursor-pointer transition-colors"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                تعديل الرد أو إرسال تهنئة أخرى
              </button>
            </motion.div>
          ) : (
            /* RSVP Form with Modern Glassmorphism */
            <motion.form
              key="rsvp-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="w-full bg-white/92 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#b8925a]/35 shadow-2xl text-right relative overflow-hidden"
              style={{
                boxShadow:
                  "0 25px 60px rgba(90,66,34,0.14), inset 0 2px 0 rgba(255,255,255,0.95)",
              }}
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#b8925a] to-transparent" />

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold text-[#5c4322] mb-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    الاسم الكريم *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="اكتب اسمك هنا..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#b8925a]/35 bg-[#fdfaf5] text-[#5c4322] focus:outline-none focus:ring-2 focus:ring-[#b8925a]/50 text-sm font-medium transition-all"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold text-[#5c4322] mb-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    رقم الهاتف (واتساب)
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    placeholder="01xxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#b8925a]/35 bg-[#fdfaf5] text-[#5c4322] focus:outline-none focus:ring-2 focus:ring-[#b8925a]/50 text-sm text-right font-medium transition-all"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  />
                </div>

                {/* Attendance Options */}
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold text-[#5c4322] mb-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    هل ستشرفنا بالحضور؟ *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, status: "attending" })}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.status === "attending"
                          ? "bg-[#b8925a] text-white border-[#b8925a] shadow-md scale-[1.02]"
                          : "bg-[#fdfaf5] text-[#6b5433] border-[#b8925a]/30 hover:border-[#b8925a]"
                      }`}
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      <Heart size={16} className={formData.status === "attending" ? "fill-white" : ""} />
                      <span>بإذن الله حاضر</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, status: "declined" })}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.status === "declined"
                          ? "bg-[#7a5730] text-white border-[#7a5730] shadow-md scale-[1.02]"
                          : "bg-[#fdfaf5] text-[#6b5433] border-[#b8925a]/30 hover:border-[#b8925a]"
                      }`}
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      <span>أعتذر لظروف</span>
                    </button>
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.status === "attending" && (
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-bold text-[#5c4322] mb-2"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      عدد الأفراد الحاضرين
                    </label>
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl border border-[#b8925a]/35 bg-[#fdfaf5] text-[#5c4322] focus:outline-none focus:ring-2 focus:ring-[#b8925a]/50 text-sm font-medium"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      <option value={1}>شخص واحد (أنا فقط)</option>
                      <option value={2}>شخصان</option>
                      <option value={3}>٣ أشخاص</option>
                      <option value={4}>٤ أشخاص</option>
                      <option value={5}>عائلة (٥ أشخاص أو أكثر)</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold text-[#5c4322] mb-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    رسالة أو دعاء طيب للعروسين
                  </label>
                  <textarea
                    rows={3}
                    placeholder="بارك الله لكما وبارك عليكما وجمع بينكما في خير..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#b8925a]/35 bg-[#fdfaf5] text-[#5c4322] focus:outline-none focus:ring-2 focus:ring-[#b8925a]/50 text-sm font-medium resize-none"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  />
                </div>

                {/* Submit Button with Hover Elevation */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-full text-white text-sm sm:text-base font-bold tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, #c99a5f 0%, #b8925a 50%, #8a6a3d 100%)",
                      boxShadow: "0 10px 25px rgba(184,146,90,0.35)",
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    {loading ? (
                      <Sparkles size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>تأكيد الإرسال</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
