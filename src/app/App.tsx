import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Star,
  Heart,
  Mail,
  Settings,
  User,
  Home,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Check,
  X,
  Plus,
  Minus,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Upload,
  Download,
  Trash2,
  Edit,
  Copy,
  Share2,
  Filter,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
} from "lucide-react";

const colors = {
  primary: { hex: "#5A6BFA", label: "Primary" },
  secondary: { hex: "#0C308F", label: "Secondary" },
  accent: { hex: "#6A5E93", label: "Accent" },
  lightBlue: { hex: "#A8BCE0", label: "Light Blue" },
  muted: { hex: "#F2F5FF", label: "Muted" },
  background: { hex: "#F7F8FC", label: "Background" },
  surface: { hex: "#FFFFFF", label: "Surface" },
  text: { hex: "#1A1A2E", label: "Text Primary" },
  textSecondary: { hex: "#6B7194", label: "Text Secondary" },
  border: { hex: "#E8EAF0", label: "Border" },
  success: { hex: "#34C759", label: "Success" },
  warning: { hex: "#FFBA49", label: "Warning" },
  error: { hex: "#FA5A5A", label: "Error" },
  info: { hex: "#5A6BFA", label: "Info" },
};

const Section = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <section className="mb-20">
    <div className="mb-8">
      <p className="text-[#5A6BFA] tracking-widest uppercase mb-1" style={{ fontSize: 12, fontWeight: 500 }}>Design System</p>
      <h2 className="text-[#1A1A2E] mb-2" style={{ fontSize: 28, fontWeight: 600 }}>{title}</h2>
      {description && <p className="text-[#6B7194] max-w-2xl" style={{ fontSize: 14, fontWeight: 400 }}>{description}</p>}
    </div>
    {children}
  </section>
);

export default function App() {
  const [toggleOn, setToggleOn] = useState(true);
  const [checkboxes, setCheckboxes] = useState([true, false, false]);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(60);
  const [tabActive, setTabActive] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Header */}
      <div className="text-center pt-16 pb-12 px-6">
        <p className="text-[#5A6BFA] tracking-widest uppercase mb-3" style={{ fontSize: 13, fontWeight: 500, letterSpacing: 3 }}>Visual Solution</p>
        <h1 className="text-[#1A1A2E] mb-4" style={{ fontSize: 42, fontWeight: 700 }}>Style Guide</h1>
        <p className="text-[#6B7194] max-w-xl mx-auto" style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.8 }}>
          Visual style is an essential part of a project as it helps create a standardized system of colours, fonts, buttons, text input, and many other components that will be combined and displayed on user screens.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">

        {/* ========== TYPOGRAPHY ========== */}
        <Section title="Typography" description="Poppins is one of the popular design tools for creating geometric sans serif mobile apps. The precise geometric design of its symbols makes it suitable for both headings and body copy.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Big Aa */}
              <div className="flex items-end gap-1 shrink-0">
                <span className="text-[#5A6BFA]" style={{ fontSize: 100, fontWeight: 700, lineHeight: 1 }}>A</span>
                <span className="text-[#1A1A2E]" style={{ fontSize: 80, fontWeight: 400, lineHeight: 1 }}>a</span>
              </div>

              {/* Weights */}
              <div className="flex-1 space-y-8">
                <div className="mb-2">
                  <span className="text-[#1A1A2E]" style={{ fontSize: 32, fontWeight: 600 }}>Poppins</span>
                </div>

                {[
                  { weight: "Regular", fontWeight: 400 },
                  { weight: "Medium", fontWeight: 500 },
                  { weight: "Semi Bold", fontWeight: 600 },
                  { weight: "Bold", fontWeight: 700 },
                ].map((w) => (
                  <div key={w.weight} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                    <span className="text-[#1A1A2E] w-28 shrink-0" style={{ fontSize: 16, fontWeight: w.fontWeight }}>{w.weight}</span>
                    <span className="text-[#6B7194]" style={{ fontSize: 13, fontWeight: w.fontWeight, lineHeight: 1.8 }}>
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Type Scale */}
            <div className="mt-12 pt-8 border-t border-[#E8EAF0]">
              <h3 className="text-[#1A1A2E] mb-6" style={{ fontSize: 18, fontWeight: 600 }}>Type Scale</h3>
              <div className="space-y-4">
                {[
                  { label: "Display", size: 48, weight: 700 },
                  { label: "H1", size: 36, weight: 600 },
                  { label: "H2", size: 28, weight: 600 },
                  { label: "H3", size: 22, weight: 600 },
                  { label: "H4", size: 18, weight: 500 },
                  { label: "Body", size: 16, weight: 400 },
                  { label: "Small", size: 14, weight: 400 },
                  { label: "Caption", size: 12, weight: 400 },
                ].map((t) => (
                  <div key={t.label} className="flex items-baseline gap-6">
                    <span className="text-[#6B7194] w-20 shrink-0" style={{ fontSize: 12, fontWeight: 500 }}>{t.label}</span>
                    <span className="text-[#6B7194] w-16 shrink-0" style={{ fontSize: 12, fontWeight: 400 }}>{t.size}px</span>
                    <span className="text-[#1A1A2E]" style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: 1.3 }}>
                      The quick brown fox
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ========== COLOR PALETTE ========== */}
        <Section title="Color Palette" description="Blue is incredibly comfortable, gives a sense of security and builds trust in the product. As the primary colour, added dark blue and grey as secondary colours for making some accents, and used black and grey for the text color.">
          {/* Primary & Secondary */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8EAF0] mb-6">
            <h3 className="text-[#1A1A2E] mb-2" style={{ fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>Colour Scheme</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
              {Object.entries(colors).map(([key, { hex, label }]) => (
                <div key={key} className="text-center">
                  <div className="w-full aspect-square rounded-xl mb-3 shadow-sm border border-[#E8EAF0]" style={{ backgroundColor: hex }} />
                  <p className="text-[#1A1A2E]" style={{ fontSize: 13, fontWeight: 500 }}>{label}</p>
                  <p className="text-[#6B7194] uppercase" style={{ fontSize: 11, fontWeight: 400 }}>{hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Large color blocks */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { hex: "#5A6BFA", label: "Primary", sub: "#5A6BFA" },
              { hex: "#0C308F", label: "Secondary", sub: "#0C308F" },
              { hex: "#6A5E93", label: "Accent", sub: "#6A5E93" },
              { hex: "#1A1A2E", label: "Dark", sub: "#1A1A2E" },
              { hex: "#F2F5FF", label: "Light", sub: "#F2F5FF", dark: true },
            ].map((c) => (
              <div key={c.hex + c.label} className="rounded-2xl overflow-hidden shadow-sm border border-[#E8EAF0]">
                <div className="h-28" style={{ backgroundColor: c.hex }} />
                <div className="bg-white p-4">
                  <p className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>{c.label}</p>
                  <p className="text-[#6B7194] uppercase" style={{ fontSize: 12 }}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ========== BUTTONS ========== */}
        <Section title="Buttons" description="Button components with various styles, sizes, and states for user interactions.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0] space-y-10">
            {/* Primary Buttons */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>PRIMARY</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#5A6BFA] text-white px-8 py-3 rounded-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 14, fontWeight: 500 }}>Create account</button>
                <button className="bg-[#5A6BFA] text-white px-6 py-2.5 rounded-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>Create account</button>
                <button className="bg-[#5A6BFA] text-white px-5 py-2 rounded-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 12, fontWeight: 500 }}>Create account</button>
                <button className="bg-[#5A6BFA]/10 text-[#5A6BFA] px-6 py-2.5 rounded-full hover:bg-[#5A6BFA]/20 transition-all" style={{ fontSize: 13, fontWeight: 500 }}>Create account</button>
                <button className="bg-[#5A6BFA] text-white px-6 py-2.5 rounded-full opacity-50 cursor-not-allowed" style={{ fontSize: 13, fontWeight: 500 }}>Disabled</button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>SECONDARY</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="border-2 border-[#5A6BFA] text-[#5A6BFA] px-8 py-3 rounded-full hover:bg-[#5A6BFA]/5 transition-all" style={{ fontSize: 14, fontWeight: 500 }}>Learn more</button>
                <button className="border-2 border-[#E8EAF0] text-[#1A1A2E] px-6 py-2.5 rounded-full hover:border-[#5A6BFA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>Learn more</button>
                <button className="border-2 border-[#E8EAF0] text-[#6B7194] px-5 py-2 rounded-full opacity-50 cursor-not-allowed" style={{ fontSize: 12, fontWeight: 500 }}>Disabled</button>
              </div>
            </div>

            {/* Destructive */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>DESTRUCTIVE</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#FA5A5A] text-white px-8 py-3 rounded-full hover:bg-[#E84A4A] transition-all" style={{ fontSize: 14, fontWeight: 500 }}>Delete</button>
                <button className="border-2 border-[#FA5A5A] text-[#FA5A5A] px-6 py-2.5 rounded-full hover:bg-[#FA5A5A]/5 transition-all" style={{ fontSize: 13, fontWeight: 500 }}>Remove</button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>ICON BUTTONS</p>
              <div className="flex flex-wrap gap-3 items-center">
                {[Heart, Star, Share2, Edit, Trash2, Copy, Download, Upload, Filter, MoreHorizontal].map((Icon, i) => (
                  <button key={i} className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F2F5FF] text-[#5A6BFA] hover:bg-[#5A6BFA] hover:text-white transition-all">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Button with Icon */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>WITH ICONS</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#5A6BFA] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>
                  <Plus size={16} /> Add Item
                </button>
                <button className="bg-[#34C759] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#2DB84F] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>
                  <Check size={16} /> Confirm
                </button>
                <button className="border-2 border-[#E8EAF0] text-[#1A1A2E] px-6 py-2.5 rounded-full flex items-center gap-2 hover:border-[#5A6BFA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* ========== INPUTS ========== */}
        <Section title="Input Fields" description="Form input components for collecting user data.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Text Input */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Text Input</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F2F5FF] rounded-xl border border-transparent focus:border-[#5A6BFA] focus:bg-white outline-none transition-all text-[#1A1A2E] placeholder:text-[#A0A5BD]"
                  style={{ fontSize: 14 }}
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Password Input</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-[#F2F5FF] rounded-xl border border-transparent focus:border-[#5A6BFA] focus:bg-white outline-none transition-all text-[#1A1A2E] placeholder:text-[#A0A5BD] pr-12"
                    style={{ fontSize: 14 }}
                  />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7194]">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Search Input */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A5BD]" />
                  <input
                    type="text"
                    placeholder="Search drugs, category"
                    className="w-full pl-11 pr-4 py-3 bg-[#F2F5FF] rounded-xl border border-transparent focus:border-[#5A6BFA] focus:bg-white outline-none transition-all text-[#1A1A2E] placeholder:text-[#A0A5BD]"
                    style={{ fontSize: 14 }}
                  />
                </div>
              </div>

              {/* Select / Dropdown */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Select</label>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 bg-[#F2F5FF] rounded-xl border border-transparent text-left flex items-center justify-between text-[#1A1A2E] hover:border-[#5A6BFA] transition-all"
                    style={{ fontSize: 14 }}
                  >
                    <span>Select option</span>
                    <ChevronDown size={18} className={`text-[#6B7194] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute z-10 top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-[#E8EAF0] py-2">
                      {["Option 1", "Option 2", "Option 3"].map((opt) => (
                        <button key={opt} className="w-full text-left px-4 py-2.5 text-[#1A1A2E] hover:bg-[#F2F5FF] transition-all" style={{ fontSize: 14 }} onClick={() => setDropdownOpen(false)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Textarea */}
              <div className="md:col-span-2">
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Textarea</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F2F5FF] rounded-xl border border-transparent focus:border-[#5A6BFA] focus:bg-white outline-none transition-all text-[#1A1A2E] placeholder:text-[#A0A5BD] resize-none"
                  style={{ fontSize: 14 }}
                />
              </div>

              {/* Error State */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Error State</label>
                <input
                  type="text"
                  value="Invalid input"
                  readOnly
                  className="w-full px-4 py-3 bg-[#FFF5F5] rounded-xl border border-[#FA5A5A] outline-none text-[#FA5A5A]"
                  style={{ fontSize: 14 }}
                />
                <p className="text-[#FA5A5A] mt-1.5 flex items-center gap-1" style={{ fontSize: 12 }}>
                  <AlertCircle size={14} /> This field is required
                </p>
              </div>

              {/* Success State */}
              <div>
                <label className="text-[#1A1A2E] block mb-2" style={{ fontSize: 13, fontWeight: 500 }}>Success State</label>
                <div className="relative">
                  <input
                    type="text"
                    value="Valid input"
                    readOnly
                    className="w-full px-4 py-3 bg-[#F0FFF4] rounded-xl border border-[#34C759] outline-none text-[#1A1A2E] pr-12"
                    style={{ fontSize: 14 }}
                  />
                  <CheckCircle size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#34C759]" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ========== TOGGLES, CHECKBOXES, RADIOS ========== */}
        <Section title="Form Controls" description="Interactive form elements including toggles, checkboxes, radio buttons, and sliders.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Toggle */}
              <div>
                <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>TOGGLE</p>
                <div className="space-y-4">
                  {[true, false].map((on, i) => {
                    const isOn = i === 0 ? toggleOn : !toggleOn;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <button
                          onClick={() => setToggleOn(i === 0 ? !toggleOn : toggleOn)}
                          className={`w-12 h-7 rounded-full transition-all relative ${isOn ? "bg-[#5A6BFA]" : "bg-[#D1D5E0]"}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-sm ${isOn ? "left-6" : "left-1"}`} />
                        </button>
                        <span className="text-[#1A1A2E]" style={{ fontSize: 14 }}>{isOn ? "On" : "Off"}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Checkboxes */}
              <div>
                <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>CHECKBOXES</p>
                <div className="space-y-3">
                  {["Notifications", "Email updates", "SMS alerts"].map((label, i) => (
                    <label key={label} className="flex items-center gap-3 cursor-pointer">
                      <button
                        onClick={() => {
                          const next = [...checkboxes];
                          next[i] = !next[i];
                          setCheckboxes(next);
                        }}
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${checkboxes[i] ? "bg-[#5A6BFA]" : "border-2 border-[#D1D5E0]"}`}
                      >
                        {checkboxes[i] && <Check size={14} className="text-white" />}
                      </button>
                      <span className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 400 }}>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Radio */}
              <div>
                <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>RADIO BUTTONS</p>
                <div className="space-y-3">
                  {["option1", "option2", "option3"].map((val, i) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer">
                      <button
                        onClick={() => setRadioValue(val)}
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${radioValue === val ? "border-[6px] border-[#5A6BFA]" : "border-2 border-[#D1D5E0]"}`}
                      />
                      <span className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 400 }}>
                        {["Daily", "Weekly", "Monthly"][i]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider */}
            <div className="mt-10 pt-8 border-t border-[#E8EAF0]">
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>SLIDER</p>
              <div className="max-w-md">
                <div className="flex justify-between mb-2">
                  <span className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 500 }}>Volume</span>
                  <span className="text-[#5A6BFA]" style={{ fontSize: 14, fontWeight: 600 }}>{sliderValue}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #5A6BFA ${sliderValue}%, #E8EAF0 ${sliderValue}%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ========== CARDS ========== */}
        <Section title="Cards" description="Card components for displaying content in a contained, organized manner.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8EAF0]">
              <div className="w-12 h-12 bg-[#5A6BFA]/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-[#5A6BFA]" size={22} />
              </div>
              <h3 className="text-[#1A1A2E] mb-2" style={{ fontSize: 18, fontWeight: 600 }}>Find Doctor</h3>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.6 }}>
                Find the best doctors near your location with verified reviews.
              </p>
              <button className="text-[#5A6BFA] flex items-center gap-1" style={{ fontSize: 13, fontWeight: 500 }}>
                Learn more <ChevronRight size={16} />
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-[#5A6BFA] rounded-2xl p-6 shadow-sm text-white">
              <div className="flex items-center justify-between mb-6">
                <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.8 }}>Total Patients</span>
                <MoreHorizontal size={20} style={{ opacity: 0.6 }} />
              </div>
              <p style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>14,562</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="bg-white/20 px-2 py-0.5 rounded-full" style={{ fontSize: 12 }}>+12.5%</span>
                <span style={{ fontSize: 12, opacity: 0.7 }}>vs last month</span>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8EAF0] text-center">
              <div className="w-16 h-16 bg-[#5A6BFA] rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="text-white" size={28} />
              </div>
              <h3 className="text-[#1A1A2E]" style={{ fontSize: 16, fontWeight: 600 }}>Dr. Elise Brown</h3>
              <p className="text-[#6B7194]" style={{ fontSize: 13 }}>Heart Surgeon</p>
              <div className="flex justify-center gap-1 mt-2 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="text-[#FFBA49] fill-[#FFBA49]" />
                ))}
              </div>
              <button className="bg-[#5A6BFA] text-white px-6 py-2 rounded-full w-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>
                Book Appointment
              </button>
            </div>

            {/* Notification Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8EAF0]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#34C759]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="text-[#34C759]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>Appointment Confirmed</h4>
                  <p className="text-[#6B7194] mt-1" style={{ fontSize: 13, lineHeight: 1.5 }}>Your appointment has been approved for March 15.</p>
                  <p className="text-[#A0A5BD] mt-2" style={{ fontSize: 12 }}>2 hours ago</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8EAF0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#5A6BFA]/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-[#5A6BFA]" size={18} />
                </div>
                <div>
                  <p className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>Smart Medical Center</p>
                  <p className="text-[#6B7194]" style={{ fontSize: 12 }}>2.4 km from your location</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#5A6BFA] text-white py-2 rounded-xl" style={{ fontSize: 13, fontWeight: 500 }}>Directions</button>
                <button className="w-10 h-10 border border-[#E8EAF0] rounded-xl flex items-center justify-center text-[#5A6BFA]">
                  <Phone size={16} />
                </button>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#5A6BFA]">
              <span className="bg-[#5A6BFA] text-white px-3 py-1 rounded-full" style={{ fontSize: 11, fontWeight: 500 }}>Popular</span>
              <p className="text-[#1A1A2E] mt-4" style={{ fontSize: 14, fontWeight: 500 }}>Pro Plan</p>
              <div className="flex items-baseline gap-1 mt-2 mb-4">
                <span className="text-[#1A1A2E]" style={{ fontSize: 36, fontWeight: 700 }}>$29</span>
                <span className="text-[#6B7194]" style={{ fontSize: 14 }}>/month</span>
              </div>
              {["Unlimited consultations", "Priority support", "Health analytics"].map((f) => (
                <div key={f} className="flex items-center gap-2 mb-2">
                  <Check size={16} className="text-[#5A6BFA]" />
                  <span className="text-[#6B7194]" style={{ fontSize: 13 }}>{f}</span>
                </div>
              ))}
              <button className="bg-[#5A6BFA] text-white px-6 py-2.5 rounded-full w-full mt-4 hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 13, fontWeight: 500 }}>
                Get Started
              </button>
            </div>
          </div>
        </Section>

        {/* ========== TABS ========== */}
        <Section title="Tabs & Navigation" description="Tab components for organizing content into switchable views.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0] space-y-10">
            {/* Pill Tabs */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>PILL TABS</p>
              <div className="bg-[#F2F5FF] rounded-full p-1 inline-flex gap-1">
                {["Clinics", "Doctors", "Calls"].map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setTabActive(i)}
                    className={`px-6 py-2 rounded-full transition-all ${tabActive === i ? "bg-[#5A6BFA] text-white shadow-sm" : "text-[#6B7194]"}`}
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Underline Tabs */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>UNDERLINE TABS</p>
              <div className="border-b border-[#E8EAF0] flex gap-8">
                {["Overview", "Analytics", "Reports", "Settings"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`pb-3 transition-all ${i === 0 ? "text-[#5A6BFA] border-b-2 border-[#5A6BFA]" : "text-[#6B7194]"}`}
                    style={{ fontSize: 14, fontWeight: 500 }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>BOTTOM NAVIGATION</p>
              <div className="bg-white rounded-2xl shadow-lg border border-[#E8EAF0] p-4 flex justify-around max-w-sm">
                {[
                  { icon: Home, label: "Home", active: true },
                  { icon: Calendar, label: "Schedule", active: false },
                  { icon: Heart, label: "Health", active: false },
                  { icon: User, label: "Profile", active: false },
                ].map(({ icon: Icon, label, active }) => (
                  <button key={label} className="flex flex-col items-center gap-1">
                    <Icon size={22} className={active ? "text-[#5A6BFA]" : "text-[#A0A5BD]"} />
                    <span className={active ? "text-[#5A6BFA]" : "text-[#A0A5BD]"} style={{ fontSize: 11, fontWeight: active ? 600 : 400 }}>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ========== BADGES & TAGS ========== */}
        <Section title="Badges & Tags" description="Small status indicators and label components.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0] space-y-8">
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>STATUS BADGES</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#34C759]/10 text-[#34C759] px-4 py-1.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>Active</span>
                <span className="bg-[#FFBA49]/10 text-[#FFBA49] px-4 py-1.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>Pending</span>
                <span className="bg-[#FA5A5A]/10 text-[#FA5A5A] px-4 py-1.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>Cancelled</span>
                <span className="bg-[#5A6BFA]/10 text-[#5A6BFA] px-4 py-1.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>In Progress</span>
                <span className="bg-[#6A5E93]/10 text-[#6A5E93] px-4 py-1.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>Scheduled</span>
              </div>
            </div>
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>TAGS</p>
              <div className="flex flex-wrap gap-2">
                {["Prescription", "HIV/AIDS", "Cold & Sinus", "Cardiology", "Smart Labs App"].map((tag) => (
                  <span key={tag} className="bg-[#F2F5FF] text-[#5A6BFA] border border-[#5A6BFA]/20 px-4 py-1.5 rounded-full flex items-center gap-2" style={{ fontSize: 12, fontWeight: 500 }}>
                    {tag} <X size={12} className="cursor-pointer opacity-60 hover:opacity-100" />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>NOTIFICATION DOTS</p>
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <Bell size={24} className="text-[#1A1A2E]" />
                  <div className="w-2.5 h-2.5 bg-[#FA5A5A] rounded-full absolute -top-0.5 -right-0.5 border-2 border-white" />
                </div>
                <div className="relative">
                  <Mail size={24} className="text-[#1A1A2E]" />
                  <div className="absolute -top-2 -right-3 bg-[#FA5A5A] text-white rounded-full w-5 h-5 flex items-center justify-center" style={{ fontSize: 10, fontWeight: 600 }}>3</div>
                </div>
                <div className="relative">
                  <Settings size={24} className="text-[#1A1A2E]" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ========== ALERTS ========== */}
        <Section title="Alerts & Toasts" description="Notification components for user feedback.">
          <div className="space-y-4">
            {[
              { icon: CheckCircle, color: "#34C759", bg: "#F0FFF4", title: "Success", msg: "Your appointment has been confirmed successfully." },
              { icon: AlertCircle, color: "#FA5A5A", bg: "#FFF5F5", title: "Error", msg: "Something went wrong. Please try again later." },
              { icon: AlertTriangle, color: "#FFBA49", bg: "#FFFBF0", title: "Warning", msg: "Your subscription will expire in 3 days." },
              { icon: Info, color: "#5A6BFA", bg: "#F2F5FF", title: "Info", msg: "A new update is available for the application." },
            ].map(({ icon: Icon, color, bg, title, msg }) => (
              <div key={title} className="rounded-2xl p-5 flex items-start gap-4 border" style={{ backgroundColor: bg, borderColor: color + "30" }}>
                <Icon size={22} style={{ color }} className="shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>{title}</p>
                  <p className="text-[#6B7194]" style={{ fontSize: 13, lineHeight: 1.5 }}>{msg}</p>
                </div>
                <button className="text-[#A0A5BD] hover:text-[#1A1A2E] transition-all shrink-0">
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* ========== AVATARS ========== */}
        <Section title="Avatars" description="User avatar components in various sizes and styles.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0] space-y-8">
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>SIZES</p>
              <div className="flex items-end gap-4">
                {[8, 10, 12, 14, 16].map((size) => (
                  <div key={size} className={`w-${size} h-${size} bg-[#5A6BFA] rounded-full flex items-center justify-center text-white shrink-0`} style={{ width: size * 4, height: size * 4, fontSize: size * 1.5, fontWeight: 600 }}>
                    E
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>GROUP</p>
              <div className="flex -space-x-3">
                {["#5A6BFA", "#0C308F", "#6A5E93", "#FA5A5A", "#34C759"].map((color, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white" style={{ backgroundColor: color, fontSize: 13, fontWeight: 600 }}>
                    {["E", "J", "A", "M", "S"][i]}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#E8EAF0] flex items-center justify-center text-[#6B7194]" style={{ fontSize: 11, fontWeight: 600 }}>+5</div>
              </div>
            </div>
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>WITH STATUS</p>
              <div className="flex gap-6">
                {[
                  { color: "#34C759", label: "Online" },
                  { color: "#FFBA49", label: "Away" },
                  { color: "#A0A5BD", label: "Offline" },
                  { color: "#FA5A5A", label: "Busy" },
                ].map(({ color, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#5A6BFA] rounded-full flex items-center justify-center text-white" style={{ fontSize: 18, fontWeight: 600 }}>D</div>
                      <div className="w-3.5 h-3.5 rounded-full absolute bottom-0 right-0 border-2 border-white" style={{ backgroundColor: color }} />
                    </div>
                    <span className="text-[#6B7194]" style={{ fontSize: 11 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ========== PROGRESS ========== */}
        <Section title="Progress & Loading" description="Visual indicators for progress and loading states.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0] space-y-10">
            {/* Progress Bars */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>PROGRESS BARS</p>
              <div className="space-y-4 max-w-lg">
                {[
                  { label: "Upload", value: 75, color: "#5A6BFA" },
                  { label: "Storage", value: 45, color: "#34C759" },
                  { label: "Bandwidth", value: 90, color: "#FA5A5A" },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#1A1A2E]" style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
                      <span className="text-[#6B7194]" style={{ fontSize: 13 }}>{value}%</span>
                    </div>
                    <div className="h-2 bg-[#E8EAF0] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, backgroundColor: color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular */}
            <div>
              <p className="text-[#6B7194] mb-4" style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>CIRCULAR PROGRESS</p>
              <div className="flex gap-8">
                {[
                  { value: 75, color: "#5A6BFA" },
                  { value: 45, color: "#34C759" },
                  { value: 90, color: "#FA5A5A" },
                ].map(({ value, color }) => (
                  <div key={value} className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E8EAF0" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${value} ${100 - value}`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>{value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ========== MODAL ========== */}
        <Section title="Modal & Dialog" description="Overlay components for focused user interactions.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <button onClick={() => setModalOpen(true)} className="bg-[#5A6BFA] text-white px-6 py-2.5 rounded-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 14, fontWeight: 500 }}>
              Open Modal
            </button>
          </div>
          {modalOpen && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6" onClick={() => setModalOpen(false)}>
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#1A1A2E]" style={{ fontSize: 20, fontWeight: 600 }}>Confirm Appointment</h3>
                  <button onClick={() => setModalOpen(false)} className="text-[#A0A5BD] hover:text-[#1A1A2E] transition-all">
                    <X size={22} />
                  </button>
                </div>
                <p className="text-[#6B7194] mb-6" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  Are you sure you want to confirm this appointment? The doctor will be notified immediately.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#5A6BFA] rounded-full flex items-center justify-center text-white" style={{ fontSize: 18, fontWeight: 600 }}>E</div>
                  <div>
                    <p className="text-[#1A1A2E]" style={{ fontSize: 14, fontWeight: 600 }}>Dr. Elise Brown</p>
                    <p className="text-[#6B7194]" style={{ fontSize: 12 }}>March 15, 2026 at 10:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setModalOpen(false)} className="flex-1 border-2 border-[#E8EAF0] text-[#6B7194] py-2.5 rounded-full" style={{ fontSize: 14, fontWeight: 500 }}>Cancel</button>
                  <button onClick={() => setModalOpen(false)} className="flex-1 bg-[#5A6BFA] text-white py-2.5 rounded-full hover:bg-[#4A5BEA] transition-all" style={{ fontSize: 14, fontWeight: 500 }}>Confirm</button>
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* ========== SPACING ========== */}
        <Section title="Spacing System" description="Consistent spacing scale based on 4px grid.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <div className="space-y-3">
              {[
                { label: "4px", value: 4, token: "space-1" },
                { label: "8px", value: 8, token: "space-2" },
                { label: "12px", value: 12, token: "space-3" },
                { label: "16px", value: 16, token: "space-4" },
                { label: "24px", value: 24, token: "space-6" },
                { label: "32px", value: 32, token: "space-8" },
                { label: "48px", value: 48, token: "space-12" },
                { label: "64px", value: 64, token: "space-16" },
              ].map(({ label, value, token }) => (
                <div key={token} className="flex items-center gap-4">
                  <span className="text-[#6B7194] w-16 shrink-0" style={{ fontSize: 12, fontWeight: 500 }}>{token}</span>
                  <span className="text-[#A0A5BD] w-12 shrink-0" style={{ fontSize: 12 }}>{label}</span>
                  <div className="h-3 bg-[#5A6BFA]/20 rounded" style={{ width: value * 3 }}>
                    <div className="h-full bg-[#5A6BFA] rounded" style={{ width: value * 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ========== BORDER RADIUS ========== */}
        <Section title="Border Radius" description="Rounded corner values used throughout the design system.">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EAF0]">
            <div className="flex flex-wrap gap-6">
              {[
                { label: "None", value: "0px" },
                { label: "SM", value: "6px" },
                { label: "MD", value: "8px" },
                { label: "LG", value: "10px" },
                { label: "XL", value: "16px" },
                { label: "2XL", value: "24px" },
                { label: "Full", value: "9999px" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="w-16 h-16 bg-[#5A6BFA] mb-2" style={{ borderRadius: value }} />
                  <p className="text-[#1A1A2E]" style={{ fontSize: 12, fontWeight: 500 }}>{label}</p>
                  <p className="text-[#A0A5BD]" style={{ fontSize: 11 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ========== SHADOWS ========== */}
        <Section title="Elevation & Shadows" description="Shadow levels for creating depth hierarchy.">
          <div className="bg-[#F2F5FF] rounded-2xl p-10">
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Level 0", shadow: "none" },
                { label: "Level 1", shadow: "0 1px 3px rgba(0,0,0,0.06)" },
                { label: "Level 2", shadow: "0 4px 12px rgba(0,0,0,0.08)" },
                { label: "Level 3", shadow: "0 8px 24px rgba(0,0,0,0.12)" },
                { label: "Level 4", shadow: "0 16px 48px rgba(0,0,0,0.16)" },
              ].map(({ label, shadow }) => (
                <div key={label} className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl mb-3 flex items-center justify-center" style={{ boxShadow: shadow }}>
                    <span className="text-[#6B7194]" style={{ fontSize: 11 }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="text-center pt-8 pb-4 border-t border-[#E8EAF0]">
          <p className="text-[#A0A5BD]" style={{ fontSize: 13 }}>Design System v1.0 โ€” Built with Poppins, Tailwind CSS & React</p>
        </div>
      </div>
    </div>
  );
}
